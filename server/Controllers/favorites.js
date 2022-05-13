const Favorites = require("../Models/favorites");

const getUserFavorites = async (req,res) => {
  try {
      const userFavorites = await Favorites.findOne({ user_id:req.params.id });
      if(userFavorites) return res.status(200).json({ success:true , userFavorites });
      return res.status(200).json({ success:true , message:"No favorites found ..." });
  }
  catch (error) {
      return res.status(500).json({ success:false , message:"Server error ..." });
  }
};


const addToFavorites = async (req,res) => {
 try {
    const userFavorites = await Favorites.findOne({ user_id:req.params.id });
    if(!userFavorites) return res.status(400).json({ success: false, message:"No users found..." });
    await Favorites.updateOne(userFavorites ,{$push:{favorites : req.body}});
    const updatedFavorites = await Favorites.findOne({user_id:req.params.id});
    return res.status(200).json({success:true , updatedFavorites});
   }
 catch (error) {
     return res.status(500).json({ success:false , message:"Server error ..." });
}
};


const deleteFromFavorites = async (req,res) => {
 try {
    const userFavorites = await Favorites.findOne({ user_id:req.params.id });
    if(!userFavorites) return res.status(400).json({ success: false, message:"No favorites found..." })
    await Favorites.updateOne(userFavorites , {$pull:{favorites : req.body}})
    const updatedFavorites = await Favorites.findOne({ user_id:req.params.id} );
    return res.status(200).json({success:true , updatedFavorites});
 }
 catch (error) {
    return res.status(500).json({ success:false , message:"Server error ..." });
}
}

module.exports = {
    getUserFavorites ,
    addToFavorites ,
    deleteFromFavorites
}