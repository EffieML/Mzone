import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './OrderList.css';

function OrderList() {
    const user = useSelector(state => state.session.user);

    return (
        <div className='nav-bar1-order-container'>
            {user && <div>
                <NavLink to={`/orders`}>
                    <div className='nav-bar1-order-1'>Returns</div>
                    <div className='nav-bar1-order-2'>& Orders</div>
                </NavLink>
            </div>}
            {!user && <div>
                <NavLink to={`/login`}>
                    <div className='nav-bar1-order-1'>Returns</div>
                    <div className='nav-bar1-order-2'>& Orders</div>
                </NavLink>
            </div>}
        </div>
    )
};

export default OrderList;
