import { useParams, NavLink, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllOrdersThunk, deleteOrderThunk, deleteOrderItemThunk } from '../../store/order';
import { getOneOrderThunk } from '../../store/order';
import './OneOrderPage.css'

function OneOrderPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { orderId } = useParams();
    // console.log("orderId", orderId);
    const user = useSelector(state => state.session.user);
    const order = useSelector(state => state.orders?.singleOrder);
    const orderItems = useSelector(state => state.orders?.singleOrder.orderItems);
    // console.log("order", order);
    // console.log("orderitem", orderItems.length)
    const [errors, setErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(getOneOrderThunk(orderId));
    }, [dispatch, orderId]);

    if (!orderItems) { return null }

    const convertDate = (orderTimeGMT) => {
        const date = new Date(orderTimeGMT);
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();
        const yr = date.getFullYear();
        return `${month} ${day}, ${yr}`;
    }


    const totalPrice = (orderItems) => {
        let price = 0;
        for (let i = 0; i < orderItems.length; i++) {
            let item = orderItems[i];
            price += item.quantity * item.product.price;
        }
        return price;
    }

    const orderTimeAdd1 = (orderTimeGMT) => {
        // utc time
        // console.log("gmt", orderTimeGMT);
        const date = new Date(orderTimeGMT);
        // cst local time
        // console.log("date0", date);
        date.setHours(date.getHours() + 1);
        // console.log("date", date, "current", new Date());
        // console.log(date > new Date());
        return date > new Date()
    }

    //can't remove single item in order ------------------------------------
    // const cancelOrderItem = async (e, item) => {
    //     e.preventDefault();
    //     if (window.confirm('Do you want to remove this item from order?')) {
    //         const data = await dispatch(deleteOrderItemThunk(item.id))
    //         if (data) {
    //             setErrors(data);
    //         } else {
    //             setErrors([])
    //         }
    //     }
    // };

    const cancelOrder = async (e) => {
        e.preventDefault();
        if (window.confirm('Do you want to cancel this order?')) {
            await dispatch(deleteOrderThunk(order.id))
                .then(() => dispatch(getAllOrdersThunk()))
                .then(() => history.push('/orders'))
        }
    };




    return (
        <div>
            <div>Your Account, Your Orders, Order Details </div>
            <div>
                <h1>Order Details</h1>
                <div>Ordered on {convertDate(order?.createdAt)}</div>
                <div>Order# {order.id}</div>
                <div>
                    {orderTimeAdd1(order?.createdAt) ? (
                        <div>
                            <button onClick={cancelOrder}>
                                Cancel order
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => alert('Order can only be cancelled within 1 hour after purchase.')}>
                                can't cancel order
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <hr></hr>
                <div>
                    <div>Shipping Address</div>
                    <div>{user?.firstname} {user?.lastname}</div>
                    <div>{user?.addresses[0].street}</div>
                    <div>{user?.addresses[0].city}, {user?.addresses[0].state} {user?.addresses[0].zip}</div>
                    <div>{user?.addresses[0].country}</div>
                </div>
                <hr></hr>
                <div>
                    <div>Order Summary</div>
                    <div>
                        <div>Item(s) Subtotal:</div>
                        <div>${orderItems ? totalPrice(orderItems) : 0.00}</div>
                    </div>
                    <div>
                        <div>Shipping & Handling:</div>
                        <div>$5.00</div>
                    </div>
                    <div>
                        <div>Free Shipping:</div>
                        <div>-$5.00</div>
                    </div>
                    <div>
                        <div>Grand Total:</div>
                        <div>${orderItems ? totalPrice(orderItems) : 0.00}</div>
                    </div>
                </div>
                <div>
                    <hr></hr>
                    {orderItems ? (orderItems.map(item => (
                        <div key={item.id}>
                            <NavLink to={`/products/${item.product?.id}`}>
                                <img src={item?.product.images[0].url} alt='Preview image' />
                            </NavLink>
                            <div>{item?.product.about}</div>
                            <div>sold by: {item?.product.brand}</div>
                            <div>${item?.product.price}</div>
                            <div>Condition: New</div>
                            <hr></hr>
                            {/* {orderTimeAdd1(order?.createdAt) ? (
                                <div>
                                    <button onClick={cancelOrderItem(item)}>
                                        Remove item
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={() => alert('Order can only be cancelled within 1 hour after purchase.')}>
                                        can't Remove item
                                    </button>
                                </div>
                            )} */}

                            <div>Write a product review</div>
                            <hr></hr>
                        </div>
                    ))) : null}
                </div>

            </div>
        </div>

    )
}

export default OneOrderPage;
