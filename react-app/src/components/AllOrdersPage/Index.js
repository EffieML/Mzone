import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllOrdersThunk } from '../../store/order';
import './AllOrdersPage.css'


function AllOrdersPage() {
    const dispatch = useDispatch();
    const orders = useSelector(state => Object.values(state.orders.allOrders).sort((a, b) => b.id - a.id))
    // sort order decreasing
    // const sortedOrders = orders.sort((a, b) => { b.id - a.id })

    useEffect(() => {
        dispatch(getAllOrdersThunk());
    }, [dispatch]);

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
            <h1>all orders</h1>
            <p>You can edit your ordered items or cancel your order within <span>5 hours</span> after it's placed.</p>
            <p>No change can be made after 5 hours of placing it.</p>
            <p>You can always place a second order for any additional items you want.</p>
            <div >
                {orders?.map(order => (
                    <div key={order.id}>
                        <hr></hr>
                        <div>
                            <div>ORDER PLACED</div>
                            <div>{convertDate(order.createdAt)}</div>
                        </div>
                        <div>
                            <div>TOTAL</div>
                            <div>$ {totalPrice(order.orderItems)}</div>
                        </div>
                        <div>
                            <div>SHIP TO</div>
                            <div>{order.user.firstname} {order.user.lastname}</div>
                        </div>
                        <div>
                            <div>ORDER # {order.id}</div>
                        </div>
                        <div>
                            <hr></hr>
                            {order?.orderItems.map(item => (
                                <div>
                                    <NavLink to={`/products/${item.product?.id}`}>
                                        <img src={item?.product.images[0].url} alt='Preview image' />
                                    </NavLink>
                                    <div>{item?.product.about}</div>
                                    <NavLink to={`/products/${item?.product.id}`}>
                                        <button>View your item</button>
                                    </NavLink>
                                    <div>write a review</div>
                                    <hr></hr>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default AllOrdersPage;
