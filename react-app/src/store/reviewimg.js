//todo: define types ----------------------------------------------------------
const GET_REVIEW_IMAGES = 'reviewimgs/getReviewImages';
const CREATE_REVIEW_IMAGE = 'reviewimgs/createReviewImage';
const DELETE_REVIEW_IMAGE = 'reviewimgs/deleteReviewImage';


//todo: define action creators ------------------------------------------------
//action: get review images
const getReviewImagesAction = (reviewimgs) => {
    return {
        type: GET_REVIEW_IMAGES,
        reviewimgs,
    }
}

//action: create review image
const createReviewImageAction = (reviewimg) => {
    return {
        type: CREATE_REVIEW_IMAGE,
        reviewimg,
    }
}

//action: delete review image
const deleteReviewImageAction = (reviewimgId) => {
    return {
        type: DELETE_REVIEW_IMAGE,
        reviewimgId
    }
}

//todo: thunks section -------------------------------------------------------
// thunk: get review images
export const getReviewImagesThunk = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}/ReviewImgs`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getReviewImagesAction(data.reviewimgs));
        return data;
    }
};

// thunk: create review img
export const createReviewImageThunk = (reviewimg, reviewId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/reviews/${reviewId}/addReviewImg`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(reviewimg),
        })
        if (response.ok) {
            const data = await response.json();
            await dispatch(createReviewImageAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete review img
export const deleteReviewImageThunk = (reviewimgId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/reviewimgs/${reviewimgId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteReviewImageAction(reviewimgId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}




//todo: reducer stuff --------------------------------------------------------
const initialState = { reviewAllimgs: {}, reviewOneimg: {} };

const reviewimgsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_REVIEW_IMAGES:
            let reviewAllimgs = {};
            action.reviewimgs.forEach(reviewimg => { reviewAllimgs[reviewimg.id] = reviewimg });
            newState = { ...state };
            newState.reviewAllimgs = reviewAllimgs;
            return newState;

        case CREATE_REVIEW_IMAGE:
            newState = { ...state, reviewAllimgs: { ...state.reviewAllimgs }, reviewOneimg: {} };
            const newReviewimg = { ...action.reviewimg };
            newState.reviewAllimgs[action.reviewimg.id] = newReviewimg;
            newState.reviewOneimg = newReviewimg;
            // console.log("reviews reducer add one review newState: ", newState)
            return newState;

        case DELETE_REVIEW_IMAGE:
            newState = { reviewAllimgs: { ...state.reviewAllimgs }, reviewOneimg: { ...state.reviewOneimg } };
            delete newState.reviewAllimgs[action.reviewimgId];
            if (action.reviewimgId === newState.reviewOneimg.id) { newState.reviewOneimg = {} }
            return newState;

        default:
            return state;
    }
}

export default reviewimgsReducer;
