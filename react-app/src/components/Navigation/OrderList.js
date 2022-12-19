import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './OrderList.css';

function OrderList() {
    const user = useSelector(state => state.session.user);

    return (
        <div className='nav-bar1-order-container'>
            {user && <div>
                <NavLink to={`/orders`}>
                    <div>Returns</div>
                    <div>& Orders</div>
                </NavLink>
            </div>}
            {!user && <div>
                <NavLink to={`/login`}>
                    <div>Returns</div>
                    <div>& Orders</div>
                </NavLink>
            </div>}
        </div>
    )
};

export default OrderList;
