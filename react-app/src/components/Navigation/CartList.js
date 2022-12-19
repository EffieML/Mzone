import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCartItemsThunk } from '../../store/cart';
import cartlogo from '../../img/cartlogo.png';
import './CartList.css';

function CartList() {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.session.user);
    const carts = useSelector(state => Object.values(state?.cartItems.allCartItems));
    // console.log('carts-------------', carts)

    useEffect(() => {
        if (user) dispatch(getAllCartItemsThunk());
    }, [dispatch, user])

    const cartTotalItems = (items) => {
        let totalItems = 0;
        for (let i = 0; i < items.length; i++) {
            totalItems += items[i].quantity;
        }
        return totalItems;
    }

    return (
        <div className='nav-bar1-cart-container'>
            {!user && <div>
                <NavLink to={`/login`}>
                    <div>
                        <div>0</div>
                        <div>
                            <img src={cartlogo} className="nav-bar1-cart-logo" />
                        </div>
                        <div> Cart</div>
                    </div>
                </NavLink>
            </div>}
            {user && <div>
                <NavLink to={`/cart`}>
                    <div>
                        {carts && cartTotalItems(carts) > 99 && <div>99+</div>}
                        {carts && cartTotalItems(carts) < 100 && <div>{cartTotalItems(carts)}</div>}
                        <div>
                            <img src={cartlogo} className="nav-bar1-cart-logo" />
                        </div>
                        <div> Cart</div>
                    </div>
                </NavLink>
            </div>}
        </div>
    )
};

export default CartList;
