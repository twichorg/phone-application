import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();

  const {cartItems, amount, total, isLoading} = useSelector(state => state.cart); // get cart state from redux store  and assign it to variables

  if(amount < 1) {  // if cart is empty show message  and return  empty cart  component
    return <section className='cart'>
      <header>
        <h2>Your Bag</h2>
        <h4 className='empty-cart'>is currently empty</h4>
      </header>
    </section>
  }
  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map(item => <CartItem key={item.id} {...item}/>)} 
      </div>

      <footer>
        <div  className='cart-total'>
          <hr/>
        <h4>Total <span>{total}</span></h4>
        </div>
        <button 
        onClick={() => dispatch(clearCart())}
        className='btn clear-btn'>Clear carts</button>
      </footer>

    </section>
  )
}

export default CartContainer