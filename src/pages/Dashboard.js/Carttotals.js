import React from 'react'
import { useSelector } from 'react-redux';
import {formatPrice} from '../../utils/helpers';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';

const Carttotals = () => {
    const { cartTotal, shipping, tax, orderTotal } = useSelector(
        (state) => state.cart
      );
    
      return (
        <Wrapper className='card '>
          <div className='card-body'>
            {/* SUBTOTAL */}
            <p className='flex '>
              <span>Subtotal : </span>
              <span className='font-medium'>{cartTotal}</span>
            </p>
            {/* SHIPPING */}
            <p className='flex '>
              <span>Shipping fee : </span>
              <span className='font-medium'>{shipping}</span>
            </p>
            {/* Tax */}
            <p className='flex '>
              <span>Tax : </span>
              <span className='font-medium'>{tax}</span>
            </p>
            {/* Order Total */}
            <p className='pb-2'>
              <span>Order Total : </span>
              <span className='font-medium'>{orderTotal}</span>
            </p>
            <Link className='btn btnn' to='/checkout'>Proceed order</Link>
          </div>
        </Wrapper>
      );
}



const Wrapper = styled.main`
width : fit-content;
text-align : center;
padding : 2rem 5.5rem;
background-color: #D3D3D3;
border-radius : 10px;
box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -webkit-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -moz-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);

`
export default Carttotals