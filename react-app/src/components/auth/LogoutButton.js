import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import '../Navigation/AccountList.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout()).then(() => history.push('/'));
  };

  return (
    <div className='navbar-signout' onClick={onLogout}>
      Sign Out
    </div>
  );
};

export default LogoutButton;
