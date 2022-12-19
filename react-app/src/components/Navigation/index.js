import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import AccountList from './AccountList';
import OrderList from './OrderList';
import CartList from './CartList';
// import LoginFormModal from '../LoginFormModal';
// import SignupFormModal from '../SignupFormModal';
// import AddNewSpotModal from '../AddNewSpotModal/index.js';
// import AddNewSpotForm from '../AddNewSpotModal/AddNewSpotForm';
import mzonelogo from '../../img/mzonelogo.png'
import flag from '../../img/flag.png'
import './Navigation.css';

function Navigation() {
    const user = useSelector(state => state.session.user);

    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <AccountButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <div >
    //             <div >
    //                 {/* <LoginFormModal /> */}
    //             </div>
    //             <div >
    //                 {/* <SignupFormModal /> */}
    //             </div>
    //             {/* <NavLink to="/signup">Sign Up</NavLink> */}
    //         </div>
    //     );
    // }

    return (
        <div className='nav-bar-container'>
            <nav className='nav-bar-1'>
                {/* left logo section */}
                <div className='nav-bar1-logo'>
                    <NavLink exact to='/'>
                        <img src={mzonelogo} className='nav-bar1-logo-img' />
                    </NavLink>
                </div>
                <hr></hr>
                <div>
                    <div>Developer: Ming Liu</div>
                    <div>links</div>
                </div>
                <hr></hr>
                {/* <div>select your address section</div> */}
                {/* <div>search section</div> */}
                <div>
                    <img src={flag} className='nav-bar1-logo-imgflag' />
                    <div>EN</div>
                </div>
                <hr></hr>
                <div>
                    <AccountList />
                </div>
                <hr></hr>
                <div>
                    <OrderList />
                </div>
                <hr></hr>
                <div>
                    <CartList />
                </div>
            </nav>
            <nav className='nav-bar-2'>
                <div>second row different category</div>
            </nav>
        </div>
    )


}

export default Navigation;
