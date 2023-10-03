import React, { useEffect, useState } from 'react'
import './Banner.css'
import FormRow from './FormRow'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products'
import FormRowSelect from './FormRowSelect';
import { handleChange } from '../features/Product'
import {getAllProducts} from '../features/Product';
const Banner = () => {
  const dispatch = useDispatch();
  const {
    isLoading, 
    products,
    name,
    category,
    company,
    categoryOptions,
    totalProducts,
    numOfPages,
    page
} = useSelector((store) => store.product);
  
  const handleSearch = (e) => {
    if(isLoading) return;
    dispatch(handleChange({name : e.target.name, value : e.target.value}));
  
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(clearFilters())
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [name, company,category, page])
  return (
    <div className="banner">
      <form className='form' action="" onSubmit={handleSubmit}>
        <div className="form-center">
        <FormRow 
          type='text'
          name='name'
          value={name}
          handleChange={handleSearch}
          />
        <FormRow 
          type='text'
          name='company'
          value={company}
          handleChange={handleSearch}
          />
        <FormRowSelect
            labelText='category'
            name='category'
            value={category}
            handleChange={handleSearch}
            lists={['all', ...categoryOptions]}
          />
        </div>
      
      </form>
      <Products />
    </div>
  )
}

export default Banner