//todo: define types ----------------------------------------------------------
const GET_ALL_CART_ITEMS = 'carts/getAllCartItems';
const ADD_ITEM_TO_CART = 'carts/addItemToCart';
const EDIT_ITEM_IN_CART = 'carts/editItemInCart';
const DELETE_ITEM_IN_CART = 'carts/deleteItemInCart';
const RESET_ITEMS_IN_CART = 'carts/resetItemsInCart';



//todo: define action creators ------------------------------------------------
//action: get all items in cart
const getAllCartItemsAction = (carts) => {
    return {
        type: GET_ALL_CART_ITEMS,
        carts,
    }
}

//action: add item to cart
const addItemToCartAction = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        item,
    }
}

//action: edit item in cart
const editItemInCartAction = (item) => {
    return {
        type: EDIT_ITEM_IN_CART,
        item,
    }
}

//action: delete item in cart
const deleteItemInCartAction = (id) => {
    return {
        type: DELETE_ITEM_IN_CART,
        id,
    }
}

//action: reset items in cart
const resetItemsInCartAction = () => {
    return {
        type: RESET_ITEMS_IN_CART,
    }
}

//todo: thunks section -------------------------------------------------------
// thunk: get all cart items
export const getAllCartItemsThunk = () => async (dispatch) => {
    const response = await fetch('/api/carts');
    if (response.ok) {
        const data = await response.json();
        // console.log("store products thunk products data: ", data)
        dispatch(getAllCartItemsAction(data.carts));
        return data;
    }
};

// thunk: add item to cart
export const addItemToCartThunk = (id, item) => async (dispatch) => {
    try {
        const response = await fetch(`/api/carts/products/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(item),
        })
        if (response.ok) {
            const data = await response.json();
            dispatch(addItemToCartAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


// thunk: edit item in cart
export const editItemInCartThunk = (id, item) => async (dispatch) => {
    try {
        const response = await fetch(`/api/carts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(item),
        })
        // console.log("edit cart response", response)
        if (response.ok) {
            const data = await response.json();
            dispatch(editItemInCartAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete item in cart
export const deleteItemInCartThunk = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/carts/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteItemInCartAction(id));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: reset items in cart
export const resetItemsInCartThunk = () => async (dispatch) => {
    try {
        const response = await fetch('/api/carts', {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(resetItemsInCartAction());
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}



//todo: reducer stuff --------------------------------------------------------
const initialState = { allCartItems: {} };

const cartItemsReducer = (state = initialState, action) => {
    let newState = {};
    // console.log('action:', action)
    switch (action.type) {

        case GET_ALL_CART_ITEMS:
            let allCartItems = {};
            action.carts.forEach(cartitem => { allCartItems[cartitem.id] = cartitem });
            newState = { ...state };
            newState.allCartItems = allCartItems;
            // console.log("newState", newState)
            return newState;

        case ADD_ITEM_TO_CART:
            newState = { ...state, allCartItems: { ...state.allCartItems } };
            const addItem = { ...action.item };
            newState.allCartItems[action.item.id] = addItem;
            // console.log("cart items reducer add one item newState: ", newState)
            return newState;

        case EDIT_ITEM_IN_CART:
            newState = { ...state, allCartItems: { ...state.allCartItems } };
            const editItem = { ...action.item };
            newState.allCartItems[action.item.id] = editItem;
            // console.log("cart items reducer add one item newState: ", newState)
            return newState;

        case DELETE_ITEM_IN_CART:
            newState = { ...state, allCartItems: { ...state.allCartItems } };
            delete newState.allCartItems[action.id]
            return newState;

        case RESET_ITEMS_IN_CART:
            newState = { allCartItems: {} };
            return newState;


        default:
            return state;

    }
}

export default cartItemsReducer;
