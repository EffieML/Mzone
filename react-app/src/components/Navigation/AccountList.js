import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import arrow from '../../img/arrow.png'
import './AccountList.css';

function AccountList() {
    const user = useSelector(state => state.session.user);
    const [name, setName] = useState("");

    let sessionLinks;
    if (user) {
        sessionLinks = (
            <div className='nav-bar1-account-dropdown'>
                <div><NavLink to={`/users/${user.id}`}>My Account</NavLink></div>
                <div><NavLink to={`/orders`}>My Orders</NavLink></div>
                <div><NavLink to={`/products/current`}>My Products</NavLink></div>
                {/* <div><NavLink to={`/favorites`}>My Favorites</NavLink></div> */}
                {/* <div><NavLink to={`/reviews`}>My Reviews</NavLink></div> */}
                <div><LogoutButton /></div>
            </div>
        );
    } else {
        sessionLinks = (
            <div className='nav-bar1-account-dropdown'>
                <div>
                    <div><NavLink to={`/login`}><button>Sign In</button></NavLink></div>
                    <div>
                        New customer?
                        <NavLink to={`/sign-up`}> Start here.</NavLink>
                    </div>
                </div>
                <hr></hr>
                <div><NavLink to={`/login`}>My Account</NavLink></div>
                <div><NavLink to={`/login`}>My Orders</NavLink></div>
                <div><NavLink to={`/login`}>My Products</NavLink></div>
                {/* <div><NavLink to={`/login`}>My Favorites</NavLink></div> */}
                {/* <div><NavLink to={`/login`}>My Reviews</NavLink></div> */}
            </div>
        );
    }

    useEffect(() => {
        if (user?.username) {
            let currName = user?.username;
            if (currName.length > 15) {
                currName = currName.slice(0, 15) + "...";
            }
            setName(currName[0].toUpperCase() + currName.slice(1).toLowerCase());
        }
    }, [user]);



    return (
        <div className='nav-bar1-account-container'>
            {user && <div>Hello, {name}</div>}
            {!user && <div>Hello, sign in</div>}
            <div className='nav-bar1-account-2'>
                <div>Account & Lists</div>
                <img src={arrow} className='nav-bar1-account-2-arrow' />
            </div>
            <div>
                {sessionLinks}
            </div>
        </div>
    )


};

export default AccountList;
