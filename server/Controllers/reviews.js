const Reviews = require("../Models/reviews");

const getReviewsByProductId = async (req,res) => {
  try { 
    const reviewsData = await Reviews.find({ product_id:req.params.id })
    if(reviewsData.length) return res.status(200).json({ success:true , reviewsData })
    return res.status(500).json({ success:false , message:"No reviews" })
  }
  catch (error) {
      return res.status(500).json({ success:false , message:"Server error ..."})
  }
}

const addReview = async (req,res) => {
  try {
      await Reviews.create(req.body);
      const reviewsData = await Reviews.find()
      return res.status(200).json({ success:true , reviewsData })
   }
   catch (error) {
     return res.status(500).json({ success:false , message:"Server error ..." })
  }
}

const updateReview = async (req,res) => {
   try {
      await Reviews.findByIdAndUpdate({_id:req.params.id} , req.body);
      const reviewsData = await Reviews.find()
      return res.status(200).json({ success:true , reviewsData })
   }
   catch (error) {
    return res.status(500).json({ success:false , message:"Server error ..." })
 }
}

const deleteReview = async (req,res) => {
   try {
      await Reviews.findByIdAndDelete({ _id:req.params.id } , req.body);
      const reviewsData = await Reviews.find()
      return res.status(200).json({ success:true , reviewsData })
   }
   catch (error) {
    return res.status(500).json({ success:false , message:"Server error ..." })
   }
}

module.exports = {
   getReviewsByProductId ,
    addReview ,
    updateReview ,
    deleteReview
}