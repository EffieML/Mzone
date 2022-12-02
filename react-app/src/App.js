import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

import EditProductPage from './components/EditProductPage';
import AddProductPage from './components/AddProductPage';
import UserListingPage from './components/UserListingPage';
import OneProductPage from './components/OneProductPage';
import AllProductsPage from './components/AllProductsPage';



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
      <NavBar />
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


        <Route path="/products/:productId/edit">
          <EditProductPage />
        </Route>

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

        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
          <AllProductsPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
