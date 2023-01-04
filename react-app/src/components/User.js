import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userimg from '../img/user.jpeg';
import yourOrders from '../img/yourOrders.png';
import yourProds from '../img/yourProds.png';
import './User.css'


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

  if (!user) return (
    <div className="pageNotFound">
      <h2>404 Page, Redirecting</h2>
      <Redirect to={"/"} />
    </div>
  );

  return (
    <div>
      {user && <div className='account-page-container'>
        <div className='add-review-page-header'>
          <div className='account-page-header-inner'>
            <img src={userimg} id='userrimg' alt='user logo' />
            <div>{user.username}</div>
          </div>
        </div>
        <h1 className='account-page-title'>Your Account</h1>
        <div className='account-page-elem-container'>
          <div className='account-page-elem'>
            <NavLink to={`/orders`}>
              <div className='account-page-elem-row'>
                <img src={yourOrders} alt='orders' />
                <div>
                  <div className='account-page-elem-row2-1'>Your Orders</div>
                  <div className='account-page-elem-row2-2'>Track, return or buy things again</div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className='account-page-elem'>
            <NavLink to={`/products/current`}>
              <div className='account-page-elem-row'>
                <img src={yourProds} alt='products' />
                <div>
                  <div className='account-page-elem-row2-1'>Your Products</div>
                  <div className='account-page-elem-row2-2'>View, modify or create new ones</div>
                </div>
              </div>
            </NavLink>
          </div>
          {/* <div>Your Profiles</div> */}
          {/* <div>Your Reviews</div> */}
        </div>
      </div>
      }
    </div >
  );
}
export default User;
