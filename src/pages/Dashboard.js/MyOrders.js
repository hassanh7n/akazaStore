import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrders} from '../../features/Order';
import styled from 'styled-components';
import Orders from './Orders';
import { Link, Navigate } from 'react-router-dom';


const MyOrders = () => {
  const dispatch = useDispatch();
  const {orders, isLoading, count} = useSelector((store) => store.order);
  console.log(orders, isLoading);
  useEffect(() => {
    dispatch(getAllOrders())
  }, []);
  if(count < 1){
    return (
      <Wrapper>
        <h1 className='wra'>No orders yet.</h1>
        <Link className='link' to='/'><h5>Back to home page?</h5></Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <button><Link className='link' to='/'>Back to home page</Link></button>
      {orders.map((order) => {
        return(
          <>
          <Orders key={order._id} {...order} />
          </>
        )
      })}
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
.link{
  color : black;
}
`



export default MyOrders