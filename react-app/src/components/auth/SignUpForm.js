import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import mzonelogo from '../../img/mzonelogowhite.png'
import './LoginForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstname, lastname, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-page-container'>
      <div className='login-page-container-inner'>
        <NavLink to={`/`}>
          <img src={mzonelogo} className='login-page-logo' alt='mzone' />
        </NavLink>
        <div className='login-page-form-container'>
          <form onSubmit={onSignUp}>
            <div className='login-page-form-title'>Create account</div>
            <div>
              {errors.map((error, ind) => (
                <div className='login-page-form-errors-container'>
                  <div className='login-page-form-errors1'>!</div>
                  <div key={ind}>{error}</div>
                </div>
              ))}
            </div>
            <div className='login-page-form-email-container'>
              <label className='login-page-form-email1'>First Name</label>
              <input
                type='text'
                name='firstname'
                onChange={updateFirstname}
                value={firstname}
              ></input>
            </div>
            <div className='login-page-form-email-container'>
              <label className='login-page-form-email1'>Last Name</label>
              <input
                type='text'
                name='lastname'
                onChange={updateLastname}
                value={lastname}
              ></input>
            </div>
            <div className='login-page-form-email-container'>
              <label className='login-page-form-email1'>User Name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div className='login-page-form-email-container'>
              <label className='login-page-form-email1'>Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div className='login-page-form-email-container'>
              <label className='login-page-form-email1'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='At least 6 characters'
                onChange={updatePassword}
                value={password}
              ></input>
              <div className='signup-page-form-password3'>
                <div className='signup-page-form-password3icon'>i</div>
                <div className='signup-page-form-password3word'> Passwords must be at least 6 characters.</div>
              </div>
            </div>
            <div className='login-page-form-email-container'>
              <label className='login-page-form-email1'>Re-enter password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
              // required={true}
              ></input>
            </div>
            <button type='submit'>Sign Up</button>
            <div className='login-page-form-note'>
              By continuing, you agree to Mzone's Conditions of Use and Privacy Notice.
            </div>
          </form>
          <div className='signup-page-line1'></div>
          <div className='signup-page-loginacct'>
            <div className='signup-page-haveacct'>
              Already have an account?
            </div>
            <NavLink to={`/login`}>Sign in</NavLink>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
