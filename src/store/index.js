
import categoryReducer from './categories';
import productReducer from './products';
import cartReducer from './cart';
import { configureStore } from '@reduxjs/toolkit';


const store = () => configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
  }
});

export default store();
