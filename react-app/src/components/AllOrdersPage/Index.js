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
        let count

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

                        {/* <div>
                                <img className='home-product-img' src={product.images[0].url} alt='Preview image' />
                            </div> */}
                        <div>{order.userId}</div>
                        <div>{convertDate(order.createdAt)}</div>

                        <div>total price</div>
                        <div>ship to user.name</div>
                        <div>order number</div>
                        <NavLink to={`/orders/${order?.id}`}>
                            <div>view order detail</div>
                        </NavLink>

                        <div>
                            <hr></hr>
                            {order?.orderItems.map(item => (
                                <div>{item.product.price}</div>
                            ))}
                            <div>link to each item page</div>
                            <div>each item img</div>
                            <div>each item name</div>
                            <div>write a review</div>
                            <hr></hr>
                        </div>




                    </div>
                ))}
            </div>

        </div>
    )
}

export default AllOrdersPage;
