import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import userimg from '../img/user.jpeg';


function User() {
  // const [user, setUser] = useState({});
  // const { userId } = useParams();

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);
  const user = useSelector(state => state.session.user);

  if (!user) {
    return null;
  }

  return (

    <div>


      {user && <div>
        <div className='add-review-page-header'>
          <div className='add-review-page-header-inner'>
            <img src={userimg} id='userrimg' />
            <div>{user.username}</div>
          </div>
        </div>
        <h1>Your Account</h1>
        <div>
          <NavLink to={`/orders`}>
            <div>
              Your Orders
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink to={`/products/current`}>
            <div>
              Your Products
            </div>
          </NavLink>
        </div>
      </div>
      }




      {/* <div>Your Profiles</div> */}
      {/* <div>Your Reviews</div> */}

      <ul>
        <li>
          <strong>User Id</strong> {user.id}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>
    </div >
  );
}
export default User;
