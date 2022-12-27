import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCartItemsThunk } from '../../store/cart';
import cart from '../../img/cart.png';
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
                    <div className='nav-bar1-cart-container-inner'>
                        <div className='nav-bar1-cart-wrap'>
                            <div className='nav-bar1-cart-num'>0</div>
                            <div>
                                <img src={cart} className="nav-bar1-cart-logo" />
                            </div>
                        </div>
                        <div className='nav-bar1-cart-word'> Cart</div>
                    </div>
                </NavLink>
            </div>}
            {user && <div>
                <NavLink to={`/cart`}>
                    <div className='nav-bar1-cart-container-inner'>
                        <div className='nav-bar1-cart-wrap'>
                            {carts && cartTotalItems(carts) > 99 && <div className='nav-bar1-cart-num'>99+</div>}
                            {carts && cartTotalItems(carts) < 100 && <div className='nav-bar1-cart-num'>{cartTotalItems(carts)}</div>}
                            <div>
                                <img src={cart} className="nav-bar1-cart-logo" />
                            </div>
                        </div>
                        <div className='nav-bar1-cart-word'> Cart</div>
                    </div>
                </NavLink>
            </div>}
        </div>
    )
};

export default CartList;
