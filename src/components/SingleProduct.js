import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import {singleProduct} from '../features/Product';
import './SingleProduct.css';

import ProductDetail from './ProductDetail';
import Review from './Review';
import FormRow from './FormRow';
import { handleChange } from '../features/Product'
import { useState } from 'react';
import Stars from './Stars';
import ProductImages from './ProductImages';
import styled from 'styled-components';
import PageHero from './PageHero';
import {formatPrice} from '../utils/helpers';
import {addItem} from '../features/Cart';
import {generateAmountOptions} from '../utils/helpers';

const initialState = {
    title : "",
    comment : "",
    rating : 0,
    productId : "",
  }


const SingleProduct = () => {
  // const [amount, setAmount] = useState(0);

    const [values, setValues] = useState(initialState);
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(() => {
        dispatch(singleProduct(id))
    }, [id])
    const {isLoading, reviews, product, images} = useSelector((store) => store.product);
    const {name, company, discription, colors, freeShipping, inventory, price, numOfReviews, averageRating, category} = product;
    // const {images} = product;
    // console.log(images);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setValues({ ...values, [name]: value });
      };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(clearFilters())
      }
      const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  console.log(amount);
      
      const cartProduct = {
        cartID: product._id,
        productID: product._id,
        image : images[0]?.src,
        title : name,
        price : price,
        company,
         amount : amount,
      };
      const addToCart = () => {
        dispatch(addItem({ product: cartProduct }));
      };
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
            {/* {images.map((image) => {
                console.log(image);
            })

            } */}
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={averageRating} reviews={numOfReviews} />
            <h5 className='price'>{price}</h5>
            <p className='desc'>{discription}</p>
            <p className='info'>
              <span>Available : </span>
              {inventory > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>Category :</span>
              {category}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <p className='info'>
              <span>Color :</span>
              {colors}
            </p>
            <hr />
            <div className='form-control'>
            <label className='label' htmlFor='amount'>
              <h4 className='text-md'>
                amount
              </h4>
            </label>
            <select
              className='select'
              id='amount'
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
            
      <button disabled={isLoading} className='btn' onClick={addToCart}>Add to cart</button>

          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
margin : 1rem;
margin-top : 2rem;
padding: 1rem;
background-color: #D3D3D3;
border-radius : 10px;
padding-bottom : 5rem;
box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -webkit-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  -moz-box-shadow: 10px 10px 8px 10px rgba(0,0,0,0.42);
  .product-center {
    display: grid;
    gap: 0rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .content{
    margin : 1rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct