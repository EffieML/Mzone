//todo: define types ----------------------------------------------------------
const GET_PRODUCT_IMAGES = 'productimgs/getProductImages';
const CREATE_PRODUCT_IMAGE = 'productimgs/createProductImage';
const DELETE_PRODUCT_IMAGE = 'productimgs/deleteProductImage';


//todo: define action creators ------------------------------------------------
//action: get product images
const getProductImagesAction = (productimgs) => {
    // console.log("getone action -------------------------")
    return {
        type: GET_PRODUCT_IMAGES,
        productimgs,
    }
}

//action: create product image
const createProductImageAction = (productimg) => {
    return {
        type: CREATE_PRODUCT_IMAGE,
        productimg,
    }
}

//action: delete product image
const deleteProductImageAction = (productimgId) => {
    return {
        type: DELETE_PRODUCT_IMAGE,
        productimgId
    }
}

//todo: thunks section -------------------------------------------------------
// thunk: get product images
export const getProductImagesThunk = (productId) => async (dispatch) => {
    const response = await fetch(`/api/products/${productId}/ProductImgs`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getProductImagesAction(data.productimgs));
        return data;
    }
};

// thunk: create product img
export const createProductImageThunk = (productimg, productId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/products/${productId}/addProductImg`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(productimg),
        })
        if (response.ok) {
            const data = await response.json();
            await dispatch(createProductImageAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete product img
export const deleteProductImageThunk = (productimgId) => async (dispatch) => {
    try {
        const response = await fetch(`/api/productimgs/${productimgId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteProductImageAction(productimgId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}




//todo: reducer stuff --------------------------------------------------------
const initialState = { ProductAllimgs: {}, ProductOneimg: {} };

const productimgsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_PRODUCT_IMAGES:
            let ProductAllimgs = {};
            action.productimgs.forEach(productimg => { ProductAllimgs[productimg.id] = productimg });
            newState = { ...state };
            newState.ProductAllimgs = ProductAllimgs;
            return newState;

        case CREATE_PRODUCT_IMAGE:
            newState = { ...state, ProductAllimgs: { ...state.ProductAllimgs }, ProductOneimg: {} };
            const newProductimg = { ...action.productimg };
            newState.ProductAllimgs[action.productimg.id] = newProductimg;
            newState.ProductOneimg = newProductimg;
            // console.log("reviews reducer add one review newState: ", newState)
            return newState;

        case DELETE_PRODUCT_IMAGE:
            newState = { ProductAllimgs: { ...state.ProductAllimgs }, ProductOneimg: { ...state.ProductOneimg } };
            delete newState.ProductAllimgs[action.productimgId];
            if (action.productimgId === newState.ProductOneimg.id) { newState.ProductOneimg = {} }
            return newState;

        default:
            return state;
    }
}

export default productimgsReducer;
