import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {removeItem} from '../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import {increase} from '../features/cart/cartSlice';
import {decrease} from '../features/cart/cartSlice';

const CartItem = ({id,img,title,price,amount}) => {
    const dispatch = useDispatch();

  return (
    <article className='cart-item '>
      <img src={img} alt={title}></img>

      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}</h4>
        <button 
        onClick={() => dispatch(removeItem(id))}
        className='remove-btn'>remove</button>
      </div>

      <div>
        <button
        onClick={() => dispatch(increase({id}))} 
        className='amount-btn '> <KeyboardArrowUpIcon/> </button>
      </div>
      <p className='amount'>{amount}</p>
      <div>
        <button className='amount-btn '> <KeyboardArrowDownIcon/> </button>
      </div>

    </article>
  )
}

export default CartItem