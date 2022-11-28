//todo: define types
const GET_ALL_PRODUCTS = 'products/getAllProducts';
const GET_ONE_PRODUCT = 'products/getOneProduct';
const ADD_ONE_PRODUCT = 'products/addOneProduct';
// const ADD_SPOT_IMAGE = 'spots/addSpotImage';
const EDIT_ONE_PRODUCT = 'products/editOneProduct';
const DELETE_ONE_PRODUCT = 'products/deleteOneProduct';


//todo: define action creators
//action: get all products
const getAllProductsAction = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products,
    }
}
//action: get one product
const getOneProductAction = (product) => {
    return {
        type: GET_ONE_PRODUCT,
        product,
    }
}
//action: add one product
const addOneProductAction = (product) => {
    return {
        type: ADD_ONE_PRODUCT,
        product
    }
}
//action: add image to product

//action: edit one product
const editOneProductAction = (product) => {
    return {
        type: EDIT_ONE_PRODUCT,
        product
    }
}
//action: delete one product
const deleteOneProductAction = (productId) => {
    return {
        type: DELETE_ONE_PRODUCT,
        productId
    }
}


//todo: thunks section
// thunk: get all products
export const listAllProductsThunk = () => async (dispatch) => {
    const response = await fetch('/api/products');
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk products data: ", data)
        dispatch(getAllProductsAction(data.products));
        return data;
    }
};
// thunk: get one product
export const listOneProductThunk = (productId) => async (dispatch) => {
    // console.log("store products thunk productId", productId)
    const response = await fetch(`/api/products/${productId}`);
    if (response.ok) {
        const singleProduct = await response.json();
        // console.log("store products thunk one product data:", singleProduct)
        dispatch(getOneProductAction(singleProduct));
        return response;
    }
};
// thunk: get all products for current user
export const listUserProductsThunk = () => async (dispatch) => {
    const response = await fetch('/api/users/products');
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk user products data: ", data)
        dispatch(getAllProductsAction(data.products));
        return response;
    }
};
// thunk: add one spot for current user
export const addSpot = (spot) => async dispatch => {
    try {
        const response = await csrfFetch('/api/spots', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(spot)
        })

        if (response.ok) {
            const data = await response.json();
            // console.log("store spots thunk add one spot step1: ", data)
            //data is obj list {address:.., lat: ..., ...}
            //do actioin addOneSpot to create newSpot which will generate data.id
            dispatch(addOneSpot(data));
            // console.log("store spots thunk add one spot step2: ", newSpot)
            const { url } = spot;
            const imageRes = await csrfFetch(`/api/spots/${data.id}/images`, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        url,
                        preview: true
                    }
                )
            });

            if (imageRes.ok) {
                const imageData = await imageRes.json();
                // console.log("imgdata and spot data", data, imageData);
                dispatch(addSpotImage(data, imageData));
                return data;
            }
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}
// thunk: edit one spot for current user
export const editSpot = (spot, spotId) => async dispatch => {
    try {
        // console.log("spots spot", spot)
        // console.log("spots spotId", spotId)
        const response = await csrfFetch(`/api/spots/${spotId}`, {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(spot)
        })

        if (response.ok) {
            const data = await response.json();
            // console.log("store spots thunk edit one spot step1: ", data)
            //data is obj list {address:.., lat: ..., ...}
            //do actioin addOneSpot to create newSpot which will generate data.id
            dispatch(editOneSpot(data));
            // console.log("store spots thunk edit one spot step2: ", editSpot)
            return data
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete one spot for current user
export const deleteSpot = (spotId) => async dispatch => {
    console.log("spots thunk delete spot spotId : ", spotId);
    console.log(typeof spotId);
    try {
        const response = await csrfFetch(`/api/spots/${spotId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteOneSpot(spotId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}




//todo: reducer stuff
const initialState = { allProducts: {}, singleProduct: {} };

const productsReducer = (state = initialState, action) => {
    let newState = {};
    // console.log('action:', action)
    switch (action.type) {

        case GET_ALL_PRODUCTS:
            let allProducts = {};
            action.products.forEach(product => { allProducts[product.id] = product });
            newState = { ...state };
            newState.allProducts = allProducts;
            // console.log("newState", newState)
            return newState;

        case GET_ONE_PRODUCT:
            newState = { ...state };
            let singleProduct = { ...action.product }
            // console.log("action spot", action.spot)  single object
            newState.singleProduct = singleProduct;
            return newState;


    }
}
