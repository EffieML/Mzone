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
                <div className='nav-bar1-account-dropdown-topu'>
                    <div>
                        {user.username} is shopping.
                    </div>
                </div>
                <div className='nav-bar1-account-dropdown-bttm'>
                    <div className='nav-bar1-account-dropdown-b1'>
                        <div className='nav-bar1-account-b1-title'>Your Selling Account</div>
                        <div className='nav-bar1-account-b1-word'><NavLink to={`/products/current`}>Products</NavLink></div>
                    </div>
                    <div className='nav-bar1-account-dropdown-b2'>
                        <div className='nav-bar1-account-b1-title'>Your Account</div>
                        <div className='nav-bar1-account-b1-word'><NavLink to={`/users/${user.id}`}>Account</NavLink></div>
                        <div className='nav-bar1-account-b1-word'><NavLink to={`/orders`}>Orders</NavLink></div>
                        {/* <div><NavLink to={`/favorites`}>My Favorites</NavLink></div> */}
                        {/* <div><NavLink to={`/reviews`}>My Reviews</NavLink></div> */}
                        <div className='nav-bar1-account-b1-word'><LogoutButton /></div>
                    </div>
                </div>
            </div>
        );
    } else {
        sessionLinks = (
            <div className='nav-bar1-account-dropdown'>
                <div className='nav-bar1-account-dropdown-top'>
                    <div><NavLink to={`/login`}><button className='nav-bar1-account-dropdown-top-button'>Sign In</button></NavLink></div>
                    <div className='nav-bar1-account-dropdown-top-word'>
                        <div className='nav-bar1-account-dropdown-top-word1'>New customer?</div>
                        <NavLink to={`/sign-up`}> Start here.</NavLink>
                    </div>
                </div>
                <div className='nav-bar1-account-dropdown-bttm'>
                    <div className='nav-bar1-account-dropdown-b1'>
                        <div className='nav-bar1-account-b1-title'>Your Selling Account</div>
                        <div className='nav-bar1-account-b1-word'><NavLink to={`/login`}>Products</NavLink></div>
                    </div>
                    <div className='nav-bar1-account-dropdown-b2'>
                        <div className='nav-bar1-account-b1-title'>Your Account</div>
                        <div className='nav-bar1-account-b1-word'><NavLink to={`/login`}>Account</NavLink></div>
                        <div className='nav-bar1-account-b1-word'><NavLink to={`/login`}>Orders</NavLink></div>
                        {/* <div><NavLink to={`/login`}>My Favorites</NavLink></div> */}
                        {/* <div><NavLink to={`/login`}>My Reviews</NavLink></div> */}
                        {/* <div><LogoutButton /></div> */}
                    </div>
                </div>
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
            <div className='nav-bar1-account-sec'>
                {user && <NavLink to={`/users/${user.id}`}>
                    <div className='nav-bar1-account-1'>Hello, {name}</div>
                    <div className='nav-bar1-account-2'>
                        <div>Account & Lists</div>
                        <img src={arrow} className='nav-bar1-account-2-arrow' />
                    </div>
                </NavLink>}
                {!user && <NavLink to={`/login`} >
                    <div className='nav-bar1-account-1'>Hello, sign in</div>
                    <div className='nav-bar1-account-2'>
                        <div>Account & Lists</div>
                        <img src={arrow} className='nav-bar1-account-2-arrow' />
                    </div>
                </NavLink>}
            </div>
            <div>
                {sessionLinks}
            </div>
        </div>
    )
};

export default AccountList;
