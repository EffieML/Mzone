import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllOrdersThunk } from '../../store/order';
import './AllOrdersPage.css'


function AllOrdersPage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
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
        <div className='all-orders-page-container'>
            <div className='all-orders-page-l1'>
                <div className='all-orders-page-l1-account'>
                    <NavLink to={`/users/${user.id}`}> Your Account  </NavLink>
                </div>
                <div className='all-orders-page-l1-icon'>{`>`}</div>
                <div className='all-orders-page-l1-orders'>Your Orders</div>
            </div>
            <h1 className='all-orders-page-title'>Your Orders</h1>
            <div className='all-orders-page-title-order'>Orders</div>
            <div className='all-orders-page-line'></div>
            {orders && orders.length <= 1 && (
                <div className='all-orders-page-num-orders'> {orders.length} order placed</div>
            )}
            {orders && orders.length > 1 && (
                <div className='all-orders-page-num-orders'> {orders.length} orders placed</div>
            )}
            <div>
                {orders?.map(order => (
                    <div key={order.id} className='all-orders-oneorder-container'>
                        <div className='all-orders-oneorder-sec1'>
                            <div className='all-orders-oneorder-sec1-left'>
                                <div className='all-orders-oneorder-sec1-left1'>
                                    <div id="title">ORDER PLACED</div>
                                    <div id="l2">{convertDate(order.createdAt)}</div>
                                </div>
                                <div className='all-orders-oneorder-sec1-left2'>
                                    <div id="title">TOTAL</div>
                                    <div id="l2">$ {totalPrice(order.orderItems)}</div>
                                </div>
                                <div className='all-orders-oneorder-sec1-left3'>
                                    <div id="title">SHIP TO</div>
                                    <div id="l2">{order.user.firstname.toLowerCase()} {order.user.lastname.toLowerCase()}</div>
                                </div>
                            </div>
                            <div className='all-orders-oneorder-sec1-right'>
                                <div id="title">ORDER # {order.id}</div>
                                <div>
                                    <NavLink to={`/orders/${order.id}`}>
                                        <button>View order details</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='all-orders-oneorder-sec2'>
                            {order?.orderItems.map(item => (
                                <div key={item.id} className='all-orders-oneorder-sec2-inner'>
                                    <div className='all-orders-oneorder-sec2-left-container'>
                                        <NavLink to={`/products/${item.product?.id}`} className='all-orders-oneorder-sec2-left'>
                                            <img src={item?.product.images[0].url} alt='Preview img' />
                                        </NavLink>
                                        <div className='all-orders-oneorder-sec2-middle'>
                                            <div id='product-name'>
                                                <NavLink to={`/products/${item?.product.id}`}>
                                                    {item?.product.name}
                                                </NavLink>
                                            </div>
                                            <NavLink to={`/products/${item?.product.id}`}>
                                                <button>View your item</button>
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className='all-orders-oneorder-sec2-right'>
                                        <NavLink to={`/products/${item?.product.id}/addreview`}>
                                            <button>Write a product review</button>
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default AllOrdersPage;
