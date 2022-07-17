import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {  
    cartItems: cartItems,  // array of objects with product id and quantity
    amount: 2,    // total amount of products in cart
    total: 0,   // total amount of products in cart
    isLoading: false,
};  // initial state of the cart

const cartSlice = createSlice({     // createSlice is a function that takes initial state and returns a reducer function
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
         state.cartItems = [];  // clear cart
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);   // remove item from cart
        },
        increase:   (state, action) => {    // increase quantity of product in cart
            state.cartItems.forEach(item => {
                if (item.id === action.payload) {
                    item.amount++;
                }
            }
            );
        },
        decrease: (state, action) => { 
            state.cartItems.forEach(item => {
                if (item.id === action.payload){
                    item.amount--;
                }
            })
        },
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        }
    }
});

//console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;   // reducer is a function that takes state and action and returns new state
