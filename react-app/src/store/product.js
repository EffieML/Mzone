//todo: define types
const GET_ALL_PRODUCTS = 'products/getAllProducts';
const GET_ONE_PRODUCT = 'products/getOneProduct';
const ADD_ONE_PRODUCT = 'products/addOneProduct';
// const ADD_SPOT_IMAGE = 'spots/addSpotImage';
const EDIT_ONE_PRODUCT = 'products/editOneProduct';
const DELETE_ONE_PRODUCT = 'products/deleteOneProduct';
const SEARCH_PRODUCTS = 'products/searchProducts';


//todo: define action creators
//action: get all products
const listAllProductsAction = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products,
    }
}
//action: get one product
const listOneProductAction = (product) => {
    return {
        type: GET_ONE_PRODUCT,
        product,
    }
}
//action: add one product
const addProductAction = (product) => {
    return {
        type: ADD_ONE_PRODUCT,
        product
    }
}
//action: add image to product

//action: edit one product
const editProductAction = (product) => {
    return {
        type: EDIT_ONE_PRODUCT,
        product
    }
}
//action: delete one product
const deleteProductAction = (productId) => {
    return {
        type: DELETE_ONE_PRODUCT,
        productId
    }
}

//action: search products
const searchProductsAction = (products) => {
    return {
        type: SEARCH_PRODUCTS,
        products
    }
}

//todo: thunks section
// thunk: get all products
export const listAllProductsThunk = () => async (dispatch) => {
    const response = await fetch('/api/products');
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk products data: ", data)
        dispatch(listAllProductsAction(data.products));
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
        dispatch(listOneProductAction(singleProduct));
        return response;
    }
};
// thunk: get all products for current user
export const listUserProductsThunk = () => async (dispatch) => {
    const response = await fetch('/api/users/products');
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk user products data: ", data)
        dispatch(listAllProductsAction(data.products));
        return response;
    }
};
// thunk: add one product for current user
export const addProductThunk = (product) => async (dispatch) => {

    const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(product)
        // body: JSON.stringify({
        //     name,
        //     category,
        //     price,
        //     brand,
        //     about,
        //     detail,
        //     dimension,
        //     weight,
        //     quantity,
        //     img,
        //     img2,
        //     img3,
        //     img4,
        //     img5
        // })
    })
    // console.log("status", response.status)
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk add one product step1: ", data)
        //data is obj list {name:.., category: ..., ...}
        //do actioin addOneProductAction to create newProduct which will generate data.id
        dispatch(addProductAction(data));
        // console.log("store products thunk add one product step2: ", data)
        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        // console.log("store products thunk add one product error: ", data)
        // console.log("store products thunk add one product error: ", Object.values(data))
        if (data.errors) {
            return data;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}
// thunk: edit one product for current user
export const editProductThunk = (product, productId) => async dispatch => {
    // console.log("products product", product)
    // console.log("products productId", productId)
    const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(product)
    })

    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk edit one product step1: ", data)
        //data is obj list {address:.., lat: ..., ...}
        //do actioin editOneProductAction to create newProduct which will generate data.id
        dispatch(editProductAction(data));
        // console.log("store products thunk edit one product step2: ", data)
        return data
    } else if (response.status < 500) {
        const data = await response.json();
        // console.log("store products thunk add one product error: ", data)
        // console.log("store products thunk add one product error: ", Object.values(data))
        if (data.errors) {
            return data;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

}

// thunk: delete one product for current user
export const deleteProductThunk = (productId) => async dispatch => {
    // console.log("products thunk delete product productId : ", productId);
    // console.log(typeof productId);
    try {
        const response = await fetch(`/api/products/${productId}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteProductAction(productId));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: search products
export const searchProductsThunk = (keyword) => async (dispatch) => {
    const response = await fetch(`/api/products/search/${keyword}`);
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk products data: ", data)
        dispatch(searchProductsAction(data.products));
        return data;
    }
};



//todo: reducer stuff
const initialState = { allProducts: {}, singleProduct: {}, searchProducts: {} };

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

        case ADD_ONE_PRODUCT:
            newState = { ...state, allProducts: { ...state.allProducts }, singleProduct: {} };
            const addProduct = { ...action.product };
            newState.allProducts[action.product.id] = addProduct;
            newState.singleProduct = addProduct;
            // console.log("products reducer add one product newState: ", newState)
            return newState;

        case EDIT_ONE_PRODUCT:
            // console.log("update payload:", action.product)
            newState = { ...state };
            newState.allProducts = { ...state.allProducts, [action.product.id]: { ...state.allProducts[action.product.id], ...action.product } }
            newState.singleProduct = { ...state.singleProduct, ...action.product }
            // console.log("products newState:", newState)
            return newState;

        case DELETE_ONE_PRODUCT:
            newState = { allProducts: { ...state.allProducts }, singleProduct: { ...state.singleProduct } };
            delete newState.allProducts[action.productId];
            // console.log('singleProduct and action product id: ', newState.singleProduct.id, action.productId)
            if (action.productId === newState.singleProduct.id) { newState.singleProduct = {} }
            return newState;

        case SEARCH_PRODUCTS:
            let searchProducts = {}
            action.products.forEach(product => { searchProducts[product.id] = product });
            newState = { ...state };
            newState.searchProducts = searchProducts;
            // console.log("newState", newState)
            return newState;

        default:
            return state;

    }
}

export default productsReducer;
