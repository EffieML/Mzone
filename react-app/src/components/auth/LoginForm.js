import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import mzonelogo from '../../img/mzonelogowhite.png'
import './LoginForm.css';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoUser = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(login('james@aa.io', 'password')).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-page-container'>
      <div className='login-page-container-inner'>
        <img src={mzonelogo} className='login-page-logo' />
        <div className='login-page-form-container'>
          <form onSubmit={onLogin}>
            <div className='login-page-form-title'>Sign in</div>
            <div >
              {errors.map((error, ind) => (
                <div className='login-page-form-errors-container'>
                  <div className='login-page-form-errors1'>!</div>
                  <div key={ind}>{error}</div>
                </div>

              ))}
            </div>
            <div className='login-page-form-email-container'>
              <label htmlFor='email' className='login-page-form-email1'>Email</label>
              <input
                name='email'
                type='text'
                // placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className='login-page-form-email-container'>
              <label htmlFor='password' className='login-page-form-email1'>Password</label>
              <input
                name='password'
                type='password'
                // placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
            </div>
            <button type='submit'>Sign in</button>
            <button onClick={demoUser}>Demo User</button>
            <div className='login-page-form-note'>
              By continuing, you agree to Mzone's Conditions of Use and Privacy Notice.
            </div>
          </form>
        </div>
        <div className='login-page-new-to-mzone-container'>
          <div className='login-page-new-to-mzone'>
            <div className='login-page-new-to-mzone-line1'></div>
            <div className='login-page-new-to-mzone-word'>
              New to Mzone?
            </div>
            <div className='login-page-new-to-mzone-line2'></div>
          </div>
          <button type='submit' className='one-prod-bttm-left2-button'>Create your Mzone account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
