import { Review, ReviewsAction } from "../Interfaces/review" ;

export const reviewsReducer = ( state:Review[] , action:ReviewsAction ) : Review[] => {

  const {type , payload} : {type:string , payload:Review} = action ;

  switch (type) {
      case "ADD" : 
        return [...state , payload ] ;

      case "REMOVE" : 
        return [...state.filter((review:Review) => review!==payload)] ;

       default :
        return state ;
  }
}