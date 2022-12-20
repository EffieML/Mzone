import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import productsReducer from './product';
import productimgsReducer from './productimg';
import cartItemsReducer from './cart';
import ordersReducer from './order';
import reviewsReducer from './review';
import reviewimgsReducer from './reviewimg';

const rootReducer = combineReducers({
  session,
  products: productsReducer,
  productimgs: productimgsReducer,
  cartItems: cartItemsReducer,
  orders: ordersReducer,
  reviews: reviewsReducer,
  reviewimgs: reviewimgsReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
