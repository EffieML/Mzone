import { useParams, NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getOneOrderThunk, deleteOrderThunk, editOrderItemThunk, deleteOrderItemThunk } from '../../store/order';
import './OneOrderPage.css'

function OneOrderPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { orderId } = useParams();
    const user = useSelector(state => state.session.user);
    const order = useSelector(state => state.orders.singleOrder);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        dispatch(getOneOrderThunk(orderId)).then(() => setIsLoaded(true));
    }, [dispatch, orderId]);

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

    return (
        <div>
            <div>Your Account, Your Orders, Order Details </div>
            <div>
                <h1>Order Details</h1>
                <div>Ordered on {convertDate(order.createdAt)}</div>
                <div>Order# {order.id}</div>
            </div>

            <div>
                <hr></hr>
                <div>
                    <div>Shipping Address</div>
                    <div>{order.user.firstname} {order.user.lastname}</div>
                    <div>{order.user.addresses[0].street}</div>
                    <div>{order.user.addresses[0].city}, {order.user.addresses[0].state} {order.user.addresses[0].zip}</div>
                    <div>{order.user.addresses[0].country}</div>
                </div>
                <hr></hr>
                <div>
                    <div>Order Summary</div>
                    <div>
                        <div>Item(s) Subtotal:</div>
                        <div>${totalPrice(order.orderItems)}</div>
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
                        <div>${totalPrice(order.orderItems)}</div>
                    </div>
                </div>
                <div>
                    <hr></hr>
                    {order?.orderItems.map(item => (
                        <div>
                            <NavLink to={`/products/${item.product?.id}`}>
                                <img src={item?.product.images[0].url} alt='Preview image' />
                            </NavLink>
                            <div>{item?.product.about}</div>
                            <div>sold by: {item?.product.brand}</div>
                            <div>${item?.product.price}</div>
                            <div>Condition: New</div>
                            <hr></hr>
                            <div>edit item</div>
                            <div>cancel item</div>
                            <div>Write a product review</div>
                            <hr></hr>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default OneOrderPage;
