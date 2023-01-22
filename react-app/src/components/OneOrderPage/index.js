import { useParams, NavLink, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getAllOrdersThunk, deleteOrderThunk } from '../../store/order';
import { getOneOrderThunk } from '../../store/order';
import LoadingPage from '../LoadingPage/index.js';
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
    // const [errors, setErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(getOneOrderThunk(orderId))
            .then(() => setIsLoaded(true));
    }, [dispatch, orderId]);

    if (!orderId && orderItems) return (
        <div className="pageNotFound">
            <h2>404 Page, Redirecting</h2>
            <Redirect to={"/"} />
        </div>
    );

    if (!user) return (
        <div className="pageNotFound">
            <h2>404 Page, Redirecting</h2>
            <Redirect to={"/"} />
        </div>
    );


    const convertDate = (orderTimeGMT) => {
        const date = new Date(orderTimeGMT);
        const month = date.toLocaleString('en-US', { month: 'long' });
        const day = date.getDate();
        const yr = date.getFullYear();
        return `${month} ${day}, ${yr}`;
    }


    const totalPrice = (orderItems) => {
        let price = 0;
        for (let i = 0; i < orderItems?.length; i++) {
            let item = orderItems[i];
            price += item.quantity * item.product.price;
        }
        price = price.toFixed(2);
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
        <>
            {!isLoaded && <LoadingPage />}
            {isLoaded && user && (
                <div className='one-order-page-container'>
                    <div className='one-order-page-l1'>
                        <div className='one-order-page-l1-account'>
                            <NavLink to={`/users/${user.id}`}> Your Account  </NavLink>
                        </div>
                        <div className='one-order-page-l1-icon'>{`>`}</div>
                        <div className='one-order-page-l1-account'>
                            <NavLink to={`/orders`}>Your Orders  </NavLink>
                        </div>
                        <div className='one-order-page-l1-icon'>{`>`}</div>
                        <div className='one-order-page-l1-order'>
                            Order Details
                        </div>
                    </div>
                    <h1 className='one-order-page-title'>Order Details</h1>
                    <div className='one-order-page-l3'>
                        <div className='one-order-page-l3-left'>
                            <div>Ordered on {convertDate(order?.createdAt)}</div>
                            <div className='one-order-page-line'>|</div>
                            <div>Order# {order.id}</div>
                        </div>
                        <div className='one-order-page-l3-right'>
                            {orderTimeAdd1(order?.createdAt) ? (
                                <div>
                                    <button onClick={cancelOrder}>
                                        Cancel order
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    {/* <button onClick={() => alert('Order can only be cancelled within 1 hour after purchase.')}>
                                can't cancel order
                            </button> */}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='one-order-page-sec1'>
                        {user.addresses.length > 0 && (
                            <div className='one-order-page-sec1-ship'>
                                <div className='one-order-page-sec1-ship-title'>Shipping Address</div>
                                <div className='one-order-page-sec1-ship-info'>{user?.firstname} {user?.lastname}</div>
                                <div className='one-order-page-sec1-ship-info'>{user?.addresses[0].street}</div>
                                <div className='one-order-page-sec1-ship-info'>{user?.addresses[0].city}, {user?.addresses[0].state} {user?.addresses[0].zip}</div>
                                <div className='one-order-page-sec1-ship-info'>{user?.addresses[0].country}</div>
                            </div>
                        )}
                        {user.addresses.length === 0 && (
                            <div className='one-order-page-sec1-ship'>

                            </div>
                        )}

                        <div className='one-order-page-sec1-summary'>
                            <div className='one-order-page-sec1-summary-title'>Order Summary</div>
                            <div className='oneline'>
                                <div>Item(s) Subtotal:</div>
                                <div>${orderItems ? totalPrice(orderItems) : 0.00}</div>
                            </div>
                            <div className='oneline'>
                                <div>Shipping & Handling:</div>
                                <div>$5.00</div>
                            </div>
                            <div className='oneline'>
                                <div>Free Shipping:</div>
                                <div>{totalPrice(orderItems) >= 25 ? <>-$5.00</> : <>$0.00</>}</div>
                            </div>
                            <div className='one-order-page-sec1-summary-title oneline'>
                                <div >Grand Total:</div>
                                <div>{totalPrice(orderItems) >= 25 ? `$${totalPrice(orderItems)}` : `$${totalPrice(orderItems) + 5}`}</div>
                                {/* <div>${orderItems ? totalPrice(orderItems) : 0.00}</div> */}
                            </div>
                        </div>
                    </div>

                    <div className='one-order-page-sec2'>
                        <div className='one-order-page-sec2-l1'>1 Shipment</div>
                        <div className='one-order-page-sec2-item-container'>
                            {orderItems ? (orderItems.map(item => (
                                <div key={item.id} className='one-order-page-sec2-item'>
                                    <div className='one-order-page-sec2-item-leftc'>
                                        <NavLink to={`/products/${item.product?.id}`}>
                                            <img src={item?.product.images[0].url} alt='Preview img' />
                                        </NavLink>
                                        <div className='one-order-page-sec2-item-middle'>
                                            <div className='one-order-page-sec2-item-middle-l1'>
                                                <NavLink to={`/products/${item.product?.id}`}>
                                                    {item?.product.name}
                                                </NavLink>
                                            </div>
                                            <div className='one-order-page-sec2-item-middle-l2'>sold by: {item?.product.brand}</div>
                                            <div className='one-order-page-sec2-item-middle-l3'>${item?.product.price}</div>
                                            <div className='one-order-page-sec2-item-middle-l4'>
                                                <div className='one-order-page-sec2-item-middle-l4b'>Condition:</div>
                                                <div>New</div>
                                            </div>
                                            <div className='one-order-page-sec2-item-middle-l5'>
                                                <NavLink to={`/products/${item.product?.id}`}>
                                                    <button>Buy it again</button>
                                                </NavLink>
                                            </div>
                                        </div>

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
                                    </div>
                                    <div className='one-order-page-sec2-item-right'>
                                        <NavLink to={`/products/${item?.product.id}/addreview`}>
                                            <button>Write a product review</button>
                                        </NavLink>
                                    </div>
                                </div>
                            ))) : null}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default OneOrderPage;
