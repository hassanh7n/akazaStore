import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carttotals from './Carttotals';
import CartItem from './CartItem';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';


const Cart = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((store) => store.user);
  useEffect(() => {

  }, [])
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  if(cartItems.length < 1){
    return(
      <Wrapper className='wra'>
      <h1 className='wra'>Your cart is empty</h1>
      <Link className='btn btnn' to='/'>Please, Fill up the cart</Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <button><Link className='link' to='/'>Back to home page</Link></button>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
      <Carttotals />
      
    </Wrapper>
  )
}

const Wrapper = styled.main`

display : flex;
margin-top: 2rem;
align-items : center;
height : 100;
justify-content:center;
flex-direction: column;
margin-bottom : 9rem;
.wra{
  margin-top:14rem;

}
.btnn{
  width : fit-content;
}
.link{
  color : black;
}
`

export default Cart