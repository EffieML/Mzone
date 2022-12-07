//todo: define types ----------------------------------------------------------
const GET_ALL_ORDERS = 'orders/getAllOrders';
const GET_ONE_ORDER = 'orders/getOneOrder';
const CREATE_ORDER = 'orders/createOrder';
const EDIT_ORDER_ITEM = 'orders/editOrderItem';
const DELETE_ORDER_ITEM = 'orders/deleteOrderItem';
const DELETE_ORDER = 'orders/deleteOrder';



//todo: define action creators ------------------------------------------------
//action: get all orders
const getAllOrdersAction = (orders) => {
    return {
        type: GET_ALL_ORDERS,
        orders,
    }
}

//action: get one order
const getOneOrderAction = (order) => {
    return {
        type: GET_ONE_ORDER,
        order,
    }
}

//action: create order
const createOrderAction = (order) => {
    return {
        type: CREATE_ORDER,
        order,
    }
}

//action: edit order item
const editOrderItemAction = (item) => {
    return {
        type: EDIT_ORDER_ITEM,
        item,
    }
}

//action: delete order item by orderitem id
const deleteOrderItemAction = (id) => {
    return {
        type: DELETE_ORDER_ITEM,
        id,
    }
}

//action: delete whole order by order id
const deleteOrderAction = (orderId) => {
    return {
        type: DELETE_ORDER,
        orderId
    }
}

//todo: thunks section -------------------------------------------------------
// thunk: get all orders
export const getAllOrdersThunk = () => async (dispatch) => {
    const response = await fetch('/api/orders');
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllOrdersAction(data.orders));
        return data;
    }
};

// thunk: get one order
export const getOneOrderThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/orders/${id}`);
    if (response.ok) {
        const singleOrder = await response.json();
        dispatch(getOneOrderAction(singleOrder));
        return response;
    }
};

// thunk: create order
export const createOrderThunk = () => async (dispatch) => {
    try {
        const response = await fetch(`/api/orders`, {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({}),
        })
        if (response.ok) {
            const data = await response.json();
            dispatch(createOrderAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


// thunk: edit order item
export const editOrderItemThunk = (id, item) => async (dispatch) => {
    try {
        const response = await fetch(`/api/orders/orderitems/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(item),
        })
        // console.log("edit cart response", response)
        if (response.ok) {
            const data = await response.json();
            dispatch(editOrderItemAction(data));
            return data;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// thunk: delete whole order by order id
export const deleteOrderItemThunk = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/orders/orderitems/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteOrderItemAction(id));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


// thunk: delete order item
export const deleteOrderThunk = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/orders/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(deleteOrderAction(id));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}




//todo: reducer stuff --------------------------------------------------------
const initialState = { allOrders: {}, singleOrder: {} };

const ordersReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {

        case GET_ALL_ORDERS:
            let allOrders = {};
            action.orders.forEach(order => { allOrders[order.id] = order });
            newState = { ...state };
            newState.allOrders = allOrders;
            return newState;

        case GET_ONE_ORDER:
            newState = { ...state };
            let singleOrder = { ...action.order }
            newState.singleOrder = singleOrder;
            return newState;

        case CREATE_ORDER:
            newState = { ...state, allOrders: { ...state.allOrders }, singleOrder: {} };
            const newOrder = { ...action.order };
            newState.allOrders[action.order.id] = newOrder;
            newState.singleOrder = newOrder;
            // console.log("cart items reducer add one item newState: ", newState)
            return newState;

        case EDIT_ORDER_ITEM:
            newState = { ...state, allOrders: { ...state.allOrders }, singleOrder: { ...state.singleOrder } };
            const editOrderItem = { ...action.order };
            newState.singleOrder.orderItems[editOrderItem.id] = editOrderItem;
            // console.log("cart items reducer add one item newState: ", newState)
            return newState;

        case DELETE_ORDER_ITEM:
            newState = { ...state, allOrders: { ...state.allOrders }, singleOrder: { ...state.singleOrder } };
            delete newState.singleOrder.orderItems[action.id]
            return newState;

        case DELETE_ORDER:
            newState = { ...state, allOrders: { ...state.allOrders }, singleOrder: { ...state.singleOrder } };
            delete newState.allOrders[action.id]
            if (action.id == newState.singleOrder.id) { newState.singleOrder = {} }
            return newState;

        default:
            return state;

    }
}

export default ordersReducer;
