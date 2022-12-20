import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

import AddProductPage from './components/AddProductPage';
import UserListingPage from './components/UserListingPage';
import OneProductPage from './components/OneProductPage';
import AllProductsPage from './components/AllProductsPage';

import ShoppingCartPage from './components/ShoppingCartPage';

import AllOrdersPage from './components/AllOrdersPage/Index';
import OneOrderPage from './components/OneOrderPage';

import AddReviewPage from './components/AddReviewPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

        {/* Review components --------------------------------------------- */}
        <Route path='/products/:productId/addreview' exact={true} >
          <AddReviewPage />
        </Route>


        {/* Product components --------------------------------------------- */}
        <Route path='/products/current/create' exact={true}>
          <AddProductPage />
        </Route>

        <Route path='/products/current' exact={true}>
          <UserListingPage />
        </Route>

        <Route path='/products/:productId' exact={true} >
          <OneProductPage />
        </Route>

        <Route path='/products' exact={true} >
          <AllProductsPage />
        </Route>

        {/* Cart components --------------------------------------------- */}
        <Route path='/cart' exact={true} >
          <ShoppingCartPage />
        </Route>

        {/* Order components --------------------------------------------- */}
        <Route path='/orders/:orderId' >
          <OneOrderPage />
        </Route>

        <Route path='/orders' exact={true} >
          <AllOrdersPage />
        </Route>



        <Route path='/' exact={true} >
          <Navigation />
          <AllProductsPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
