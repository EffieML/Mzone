import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountList from './AccountList';
import OrderList from './OrderList';
import CartList from './CartList';
import Search from '../Search'
// import LoginFormModal from '../LoginFormModal';
// import SignupFormModal from '../SignupFormModal';
// import AddNewSpotModal from '../AddNewSpotModal/index.js';
// import AddNewSpotForm from '../AddNewSpotModal/AddNewSpotForm';
import mzonelogo from '../../img/mzonelogo.png'
import githublogo from '../../img/githublogo.png'
import linkedin from '../../img/linkedin.jpg'
import flag from '../../img/flag.png'
import './Navigation.css';

function Navigation() {
    // const user = useSelector(state => state.session.user);
    // const category_map = {
    //     'mdevices': 'Mzone Devices',
    //     'home': 'Mzone Home',
    // }

    return (
        <div className='nav-bar-container'>
            <nav className='nav-bar-1'>
                {/* left logo section */}
                <div className='nav-bar1-left'>
                    <div className='nav-bar1-logo'>
                        <NavLink exact to='/'>
                            <img src={mzonelogo} className='nav-bar1-logo-img' alt='mzone' />
                        </NavLink>
                    </div>
                    <div className='nav-bar1-developer-container'>
                        <div className='nav-bar1-developer-name'>Developer: Ming Liu</div>
                        <div className='nav-bar1-developer-container-row2'>
                            <a href='https://github.com/EffieML/Mzone' target="_blank">
                                <div className='nav-bar1-developer-logosec'>
                                    <img src={githublogo} alt='github' />
                                    <div className='nav-bar1-developer-logoname'>GitHub</div>
                                </div>
                            </a>
                            <a href='https://www.linkedin.com/in/effie-liu-b57372261/' target="_blank">
                                <div className='nav-bar1-developer-logosec'>
                                    <img src={linkedin} alt='linkedin' />
                                    <div className='nav-bar1-developer-logoname'>LinkedIn</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div>select your address section</div> */}
                <div className='nav-bar1-middle'>
                    <div><Search /></div>
                </div>

                <div className='nav-bar1-right'>
                    <div className='nav-bar1-flag-container'>
                        <img src={flag} className='nav-bar1-flag-img' alt='flag' />
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
            <nav className='nav-bar-2-container'>
                <div className='nav-bar-2'>
                    <NavLink to='/products' >All Products</NavLink>
                    <NavLink to='/products/categories/mdevices' >Mzone Devices</NavLink>
                    <NavLink to='/products/categories/home' >Mzone Home</NavLink>
                    <NavLink to='/products/categories/computer' >Mzone Computers</NavLink>
                    <NavLink to='/products/categories/pet' >Mzone Pets</NavLink>
                </div>
            </nav>
        </div>
    )


}

export default Navigation;
