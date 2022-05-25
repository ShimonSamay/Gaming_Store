import { Review } from "../Interfaces/review";

const baseUrl = "http://localhost:5500/reviews"

export const getProductReviews = async ( productId : string | undefined ) : Promise < Review[] | unknown> => {
  try {
     const { reviewsData } : { reviewsData : Review[] } = await(await fetch(`${baseUrl}/${productId}`)).json() ;
     return reviewsData ;
     
  }
  catch (error : unknown) {
    return error ;
  }
}