import React, { useEffect, useState } from 'react'
import './register.css'
import { useDispatch, useSelector } from 'react-redux'
import {  registerUser, loginUser } from '../../features/User'
import FormRow from './FormRow'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const initialState = {
  name : "",
  password : "",
  email : "",
  isMember : true,
  forgetPassword : false,
  resetPassword : "",
  hobby : "",

}

const Register = () => {
  const [values, setValues] = useState(initialState);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, isLoading} = useSelector((store) => store.user);
  const togglePassword = () => {
    setValues({...values, forgetPassword : !values.forgetPassword})
  }
  

  const toggleMember = () => {
    setValues({...values, isMember : !values.isMember})
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember, hobby} = values;
    if( !email || !password){
      console.log("Please fill out all the fields");
    };

    if(isMember && !values.forgetPassword){
      dispatch(loginUser({email : email, password : password}))
      return
    }
    // dispatch(registerUser({name, email, password})); 
    // if(values.forgetPassword){
    //   dispatch(ResetPassword({email : email, hobby : hobby, newPassword : resetPassword}))
    // }
    if( !email || !password || !name || !hobby){
      console.log("Please fill out all the fields");
    };
    dispatch(registerUser({name : name, email : email, password : password, hobby : hobby}))
  }

  
    if(user){
      return (
        setTimeout(() => {
                Navigate('/profile')
              }, 3000)
      )
    }

    
  

  return (
    <div className='oooo'>
        <form onSubmit={handleSubmit} className="from" >
               
                <h1 className='h3'>AKAZA~</h1>
                {/* <span className='span'>STORE</span> */}
              
               
              {/* name field */}
              {!values.isMember && (
                <FormRow
                  type='text'
                  name='name'
                  value={values.name}
                  handleChange={handleChange}
                />
              )}

              {/* email field */}
              <FormRow
              type='email'
              name='email'
              value={values.email}
              handleChange={handleChange}
              />


               
              <FormRow
              type='password'
              name='password'
              value={values.password}
              handleChange={handleChange}
              />
              

              
              { !values.isMember  && (
              <FormRow
              type='text'
              name='hobby'
              value={values.hobby}
              handleChange={handleChange}
              />
              )

              }

            {/* {values.forgetPassword && (
              <FormRow
              type='password'
              name='resetPassword'
              value={values.resetPassword}
              handleChange={handleChange}
              />
              )

              } */}
              


      <button type='submit' className='btn btn-block btn-hipster' disabled={isLoading}
      >
        
        {isLoading ? 'loading...' : 'submit'}
      </button>
      <p className='h3'>
          {values.isMember ? 'enter your password?' : 'register'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'register' : 'login?'}
          </button>

        </p>
      {/* <p>
          {values.forgetPassword ? 'rsest your password?' : 'enter you password'}
          <button type='button' onClick={togglePassword} className='member-btn'>
            {values.forgetPassword ? 'login' : 'forget password?'}
          </button>

        </p> */}
        <Link to='/resetPassword'><button  className='member-btn h3' type='button'>forget password?</button></Link>
        
        </form>
    </div>
  )
}

export default Register