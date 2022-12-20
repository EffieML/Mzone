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
import githublogo from '../../img/githublogo.png'
import flag from '../../img/flag.png'
import './Navigation.css';

function Navigation() {
    const user = useSelector(state => state.session.user);

    return (
        <div className='nav-bar-container'>
            <nav className='nav-bar-1'>
                {/* left logo section */}
                <div className='nav-bar1-left'>
                    <div className='nav-bar1-logo'>
                        <NavLink exact to='/'>
                            <img src={mzonelogo} className='nav-bar1-logo-img' />
                        </NavLink>
                    </div>
                    <div className='nav-bar1-developer-container'>
                        <div className='nav-bar1-developer-name'>Developer: Ming Liu</div>
                        <div className='nav-bar1-developer-logosec'>
                            <img src={githublogo} />
                            <div className='nav-bar1-developer-logoname'>GitHub</div>
                        </div>
                    </div>
                </div>
                {/* <div>select your address section</div> */}
                <div className='nav-bar1-middle'>
                    <div>search section</div>
                </div>

                <div className='nav-bar1-right'>
                    <div className='nav-bar1-flag-container'>
                        <img src={flag} className='nav-bar1-flag-img' />
                        <div className='nav-bar1-flag-word' >EN</div>
                    </div>

                    <div>
                        <AccountList />
                    </div>

                    <div>
                        <OrderList />
                    </div>

                    <div>
                        <CartList />
                    </div>
                </div>

            </nav>
            <nav className='nav-bar-2'>
                <div>second row different category</div>
            </nav>
        </div>
    )


}

export default Navigation;
