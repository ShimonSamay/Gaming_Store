const jwt = require("jsonwebtoken");

const verifyAccess = async (req, res, next) => {
try {
   const bearer =  req.headers["authorization"] ;
   if(!bearer) return res.status(400).json({ success:false , message:"Not authorized ..." }) ;
   const accessToken = bearer.split(" ")[1];
   jwt.verify(accessToken , process.env.PRIVATE_KEY , (error) => {
    if(error) return res.status(403).json({ success:false , message:"no credentials found ..." });
    next() ;
   })
}
catch (error) {
   return res.status(500).json({ success:false , message:"Server error ..." })
 }
};

module.exports = {
    verifyAccess
}