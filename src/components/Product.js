import React from 'react'
import './Product.css'
import styled from 'styled-components'
import ProductInfo from './ProductInfo'
import Stars from './Stars'

const Product = ({name, images, price, averageRating}) => {

  
  return (
    <Wrapper>
       <header>
        <img src={images[0]?.src} alt="" />
      </header>
      <div className='content'>
        <div className='content-center'>
        <h5 className='name'>{name}</h5>
        <h5 className='price'>{price + "$"}</h5>
        </div>
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
background: var(--clr-primary-10);
border-radius: var(--borderRadius);
display: grid;
grid-template-rows: 1fr;
box-shadow: var(--shadow-2);
:hover{
  scale : 1.03;
  transition: 0.5s all ease-in-out;
  cursor : pointer
}
/* header{
  height : 300px
} */
header {
  padding: 1rem;
  border-bottom: 1px solid var(--grey-100);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  
  h5 {
    letter-spacing: 0;
  }
}
img{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: var(--primary-500);
  border-radius: var(--borderRadius);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);
}
/* @media (min-width: 500px){
    img{
        width: 380px;
  height: auto;
    }
} */
.price:{
  font-size : 10px;
}
.info {
  /* h5 {
    margin-bottom: 0.25rem;
  } */
  p {
    margin: 0;
    text-transform: capitalize;
    color: var(--grey-400);
    letter-spacing: var(--letterSpacing);
  }
}
.pending {
  background: #cccc00;
  color: white;
}
.interview {
  background: #e0e8f9;
  color: #647acb;
}
.declined {
  color: #d66a6a;
  background: #ffeeee;
}
.content {
  padding: 0rem 1rem;
}
.content-center {
  display: flex;
  width : 100%;
  justify-content: space-between;
  /* grid-template-columns: 1fr 1fr;
  row-gap: 1rem; */
  /* @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
  } */
}


.status {
  border-radius: var(--borderRadius);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: center;
  width: 100px;
  height: 30px;
  margin-top: 0.5rem;
}
/* footer {
  margin-top: 1rem;
} */
.edit-btn,
.delete-btn {
  letter-spacing: var(--letterSpacing);
  cursor: pointer;
  height: 30px;
}
.edit-btn {
  color: var(--green-dark);
  background: var(--green-light);
  margin-right: 0.5rem;
}
.delete-btn {
  color: var(--red-dark);
  background: var(--red-light);
}
&:hover .actions {
  visibility: visible;
}

`;

export default Product