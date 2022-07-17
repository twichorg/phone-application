import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.jsx'; 

export const store = configureStore({   
  reducer: {
    cart: cartReducer,  
  },
}); 

