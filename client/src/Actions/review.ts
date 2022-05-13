import { Review, ReviewsAction } from "../Interfaces/review";

export const addReview = (value: Review) : ReviewsAction => {
  return {
    type: "ADD",
    payload: value,
  };
};

export const deleteReview = (value: Review) : ReviewsAction => {
  return {
    type: "ADD",
    payload: value,
  };
};
