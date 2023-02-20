import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

import AddProductPage from './components/AddProductPage';
import UserListingPage from './components/UserListingPage';
import OneProductPage from './components/OneProductPage';
import ProductsCategoryPage from './components/ProductsCategoryPage';
import ProductsBySearch from './components/ProductsBySearch';
import AllProductsPage from './components/AllProductsPage';

import ShoppingCartPage from './components/ShoppingCartPage';

import AllOrdersPage from './components/AllOrdersPage/Index';
import OneOrderPage from './components/OneOrderPage';

import AddReviewPage from './components/AddReviewPage';
import FourOhFourPage from './components/404Page';

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

        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute> */}

        <ProtectedRoute path='/users/:userId' exact={true} >
          <Navigation />
          <User />
          <Footer />
        </ProtectedRoute>

        {/* Review components --------------------------------------------- */}
        <Route path='/products/:productId/addreview' exact={true} >
          <Navigation />
          <AddReviewPage />
          <Footer />
        </Route>


        {/* Product components --------------------------------------------- */}
        <Route path='/products/current/create' exact={true}>
          <Navigation />
          <AddProductPage />
          <Footer />
        </Route>

        <Route path='/products/current' exact={true}>
          <Navigation />
          <UserListingPage />
          <Footer />
        </Route>

        <Route path='/products/:productId' exact={true} >
          <Navigation />
          <OneProductPage />
          <Footer />
        </Route>

        <Route path='/products/categories/:category' exact={true} >
          <Navigation />
          <ProductsCategoryPage />
          <Footer />
        </Route>

        <Route path='/products/search/:searchTerm' exact={true} >
          <Navigation />
          <ProductsBySearch />
          <Footer />
        </Route>

        <Route path='/products' exact={true} >
          <Navigation />
          <AllProductsPage />
          <Footer />
        </Route>

        {/* Cart components --------------------------------------------- */}
        <Route path='/cart' exact={true} >
          <Navigation />
          <ShoppingCartPage />
          <Footer />
        </Route>

        {/* Order components --------------------------------------------- */}
        <Route path='/orders/:orderId' >
          <Navigation />
          <OneOrderPage />
          <Footer />
        </Route>

        <Route path='/orders' exact={true} >
          <Navigation />
          <AllOrdersPage />
          <Footer />
        </Route>

        <Route path='/' exact={true} >
          <Navigation />
          <AllProductsPage />
          <Footer />
        </Route>

        <Route>
          {/* <h1>THIS IS A 404</h1> */}
          <FourOhFourPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
