const reviewsRouter = require("express").Router();
const {getReviewsByProductId ,addReview ,updateReview ,deleteReview} = require("../Controllers/reviews")

reviewsRouter.get("/:id" , getReviewsByProductId);
reviewsRouter.post("/" , addReview);
reviewsRouter.put("/:id" , updateReview);
reviewsRouter.delete("/:id" ,deleteReview);

module.exports = reviewsRouter ;