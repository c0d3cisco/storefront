import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
