const Games = require("../Models/games");

const getGames = async (req,res) => {
  try {
    const GamesData = await Games.find()
    if(GamesData.length) return res.status(200).json({success:true,GamesData});
    return res.status(200).json({message:"No Games.."})
  }
  catch (error) {
      return res.status(500).json({ success:false , message:"Server error ..." })
  }
}

const addGame = async (req,res) => {
   try {
       await Games.create(req.body);
       const GamesData = await Games.find();
       return res.status(200).json({ success:true , GamesData });
   }
   catch (error) {
    return res.status(500).json({ success:false , message:"Server error ..." })
   }
}

const updateGame = async (req,res) => {
   try {
       await Games.findByIdAndUpdate({_id:req.params.id} , req.body);
       const GamesData = await Games.findById({ _id:req.params.id });
       return res.status(200).json({ success:true , GamesData });
   }
   catch (error) {
    return res.status(500).json({ success:false , message:"Server error ..." })
   }
}

const deleteGame = async (req,res) => {
   try {
      await Games.findByIdAndRemove({ _id:req.params.id })
      const GamesData = await Games.find();
      return res.status(200).json({ success:true,GamesData });
   }
   catch (error) {
    return res.status(500).json({ success:false , message:"Server error ..." })  
   }
}

module.exports = {
    getGames ,
    addGame ,
    updateGame ,
    deleteGame
}