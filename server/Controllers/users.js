const Users = require("../Models/users");
const Favorites = require("../Models/favorites")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req,res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ success: false, message: "Email is required ..." });
    if (!password) return res.status(400).json({ success: false, message: "Password is required ..." });
    const user = await Users.findOne({ email: email });
    if (user) return res.status(400).json({ success: false, message: "Email is exist ..." });
    bcrypt.hash(password , 12 , async (error , hashed) => {
      if (error) return res.status(400).json({ success: false, message: "Error while hashing password ..." });
      req.body.password = hashed ;
      const newUser = await Users.create(req.body);
      await Favorites.create({ user_id:newUser._id });
      return res.status(200).json({ success:true ,  message: "Registered successfully" });
    })
  } 
  catch (error) {
    return res.status(500).json({ success: false, message: "Server error .." , error });
  }
};


const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ success: false, message: "Email is required ..." });
    if (!password) return res.status(400).json({ success: false, message: "Password is required ..." });
    const user = await Users.findOne({ email:email });
    if(!user) return res.status(400).json({ success: false, message:"Wrong Email ..." })
    bcrypt.compare(password , user.password , (error , areMatch) => {
     if(error) return res.status(500).json({ success: false, message:"Error while validate password ..." })
     if(!areMatch) return res.status(400).json({ success: false, message:"Wrong password , Try Again .." })
     const token = jwt.sign({user} , process.env.PRIVATE_KEY , {expiresIn:"30m"}) ;
     return res.status(200).json({success:true , token})
    })
   }
   catch (error) {
    return res.status(500).json({ success: false, message: "Server error .." , error }); 
   }
}


const getUsersData = async (req,res) => {
   try {
     const data = await Users.find();
     if(data.length) return res.status(200).json({success:true , data});
     return res.status(200).json({ success:false, message: "no users found"});
   }
   catch (error) {
    return res.status(500).json({ success: false, message: "Server error .." , error }); 
   }
}

module.exports = {
    register ,
    login ,
    getUsersData ,
}