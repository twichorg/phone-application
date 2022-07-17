//import { useSelector } from 'react-redux';
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';

const Navbar = () => {
  //console.log(useSelector((store) => store.cart));

  const amount = useSelector((store)=>store.cart.amount);  //useSelector is a hook that allows us to access the state of the store

  return (
    <>
    <nav>
      <div className='nav-center'>
        <h3>Phone Basket</h3>
        <div className='nav-container'>
          <ShoppingBasketIcon fontSize='large'/>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar