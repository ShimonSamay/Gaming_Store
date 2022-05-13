export interface Review {
    product : string ;
    product_id : string ;
    reviewer_id : string ;
    description : string ;
    date ? : string  
}

export interface ReviewsAction {
    type : string ;
    payload : Review
}