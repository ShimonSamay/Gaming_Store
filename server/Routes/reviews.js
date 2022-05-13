const reviewsRouter = require("express").Router();
const {getReviews ,addReview ,updateReview ,deleteReview} = require("../Controllers/reviews")

reviewsRouter.get("/" , getReviews);
reviewsRouter.post("/" , addReview);
reviewsRouter.put("/:id" , updateReview);
reviewsRouter.delete("/:id" ,deleteReview);

module.exports = reviewsRouter ;