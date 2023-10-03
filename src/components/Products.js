import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {getAllProducts} from '../features/Product';
import './Products.css'
import Product from './Product';
import PageBtnContainer from './PageBtnContainer';

const Products = () => {
    const {
    isLoading, 
    products,
    totalProducts,
    numOfPages,
    page
    } = useSelector((store) => store.product);

          console.log(products);
      if(isLoading === true){
        return(
          <>
          <h2>Loading...</h2>
        </>
        )
      }
      
    
      if(totalProducts === 0){
        return(
          <>
          <h2>No product to display.</h2>
        </>
        )
      }
  return (
    <div className="main">
            <h4>
                {totalProducts } Product{products.length > 1 && 's'}    found
            </h4>
            <div className="jobs">
          {products.map((products) => {
            return (
              <a href={`/${products._id}`}>
                <div className="Product">
                <Product 
                  className='Product'
                  key={products._id}
                  {...products}
                />
              </div>
              </a>
            )
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
          </div>
  )
}

export default Products