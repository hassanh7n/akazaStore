import React from 'react'
import moment from 'moment/moment'
import Items from './Items';
import styled from 'styled-components';


const Orders = ({createdAt, total,shippingFee, tax, status ,subtotal,orderItems, index}) => {
  const date = moment(createdAt).format('DD MM YYYY,  hh:mm:ss');
  return (
    <Wrapper>
      <h5>created at : {date}</h5>
      {orderItems.map((item, index) => {
        const {name, amount, price, image} = item;
        return(
          <Items key={item._id} name={name} amount={amount} price={price} index={index} image={image} />
        )
      })}
      <p>SubTotal : {subtotal}</p>
      <p>Shipping fee : {shippingFee}</p>
      <p>Tax : {tax}</p>
      <h5 className= 'paid'>Status : {status}</h5>
      <h5>Total : {total + "$"}</h5>
    </Wrapper>
  )
}


const Wrapper = styled.main`
background-color: #D3D3D3;
width : 95%;
padding : 1rem;
margin : 1rem 0rem;
box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
      border-radius : 10px;
.paid : {
  color : green;
}
@media (min-width: 440px) {
  padding : 2rem;
}

`

export default Orders