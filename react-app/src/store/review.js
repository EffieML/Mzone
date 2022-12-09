//todo: define types ----------------------------------------------------------
const GET_PRODUCT_REVIEWS = 'reviews/getProductReviews';
const GET_USER_REVIEWS = 'reviews/getUserReviews';
const CREATE_REVIEW = 'reviews/createReview';
const EDIT_REVIEW = 'reviews/editReview';
const DELETE_REVIEW = 'reviews/deleteReview';



//todo: define action creators ------------------------------------------------
//action: get product reviews
const getProductReviewsAction = (reviews) => {
    return {
        type: GET_PRODUCT_REVIEWS,
        reviews,
    }
}

//action: get user reviews
const getUserReviewsAction = (reviews) => {
    // console.log("getone action -------------------------")
    return {
        type: GET_USER_REVIEWS,
        reviews,
    }
}

//action: create review
const createReviewAction = (review) => {
    return {
        type: CREATE_REVIEW,
        review,
    }
}

//action: edit review
const editReviewAction = (review) => {
    return {
        type: EDIT_REVIEW,
        review,
    }
}

//action: delete review
const deleteReviewAction = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

//todo: thunks section -------------------------------------------------------
// thunk: get product reviews
export const getProductReviewsThunk = (productId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/products/${productId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getProductReviewsAction(data.reviews));
        return data;
    }
};

// thunk: get user reviews
export const getUserReviewsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/reviews`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getUserReviewsAction(data.reviews));
        return data;
    }
};


// thunk: create review
export const createReviewThunk = (review, productId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/reviews/products/${productId}`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(review),
        })
        if (response.ok) {
            const data = await response.json();
            await dispatch(createReviewAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


// thunk: edit review
export const editReviewThunk = (reivew, reviewId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/reviews/${reviewId}`, {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(reivew),
        })
        // console.log("edit review response", response)
        if (response.ok) {
            const data = await response.json();
            dispatch(editReviewAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete whole order by order id
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteReviewAction(reviewId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}




//todo: reducer stuff --------------------------------------------------------
const initialState = { allReviews: {}, singleReview: {} };

const reviewsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {

        case GET_PRODUCT_REVIEWS:
            let allReviews = {};
            action.reviews.forEach(review => { allReviews[review.id] = review });
            newState = { ...state };
            newState.allReviews = allReviews;
            return newState;

        case GET_USER_REVIEWS:
            allReviews = {};
            action.reviews.forEach(review => { allReviews[review.id] = review });
            newState = { ...state };
            newState.allReviews = allReviews;
            return newState;

        case CREATE_REVIEW:
            newState = { ...state, allReviews: { ...state.allReviews }, singleReview: {} };
            const newReview = { ...action.review };
            newState.allReviews[action.review.id] = newReview;
            newState.singleReview = newReview;
            // console.log("reviews reducer add one review newState: ", newState)
            return newState;

        case EDIT_REVIEW:
            newState = { ...state };
            newState.allReviews = { ...state.allReviews, [action.review.id]: { ...state.allReviews[action.review.id], ...action.review } }
            newState.singleReview = { ...state.singleReview, ...action.review }
            return newState;

        case DELETE_REVIEW:
            newState = { allReviews: { ...state.allReviews }, singleReview: { ...state.singleReview } };
            delete newState.allReviews[action.reviewId];
            if (action.reviewId === newState.singleReview.id) { newState.singleReview = {} }
            return newState;


        default:
            return state;

    }
}

export default reviewsReducer;
