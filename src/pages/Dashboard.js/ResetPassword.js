import React, { useEffect, useState } from 'react'
import './register.css'
import { useDispatch, useSelector } from 'react-redux'
import {  resetPassword } from '../../features/User'
import FormRow from './FormRow'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialState = {
    password : "",
    email : "",
    forgetPassword : false,
    NewPassword : "",
    hobby : "",
  
  }

const ResetPassword = () => {
    const [values, setValues] = useState(initialState);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, isLoading} = useSelector((store) => store.user);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, hobby, NewPassword} = values;
    
    if( !email || !NewPassword || !hobby){
      console.log("Please fill out all the fields");
    };
    console.log(email,NewPassword, hobby );
    dispatch(resetPassword({ email : email, newPassword : NewPassword, hobby : hobby}))
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
          
           

          {/* email field */}
          <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          />


            <FormRow
            type='text'
            name='hobby'
            value={values.hobby}
            handleChange={handleChange}
            />
           
          <FormRow
          type='password'
          name='NewPassword'
          value={values.NewPassword}
          handleChange={handleChange}
          />
          

          
         
          

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
  
  
    <Link to='/register'><button  className='member-btn h3' type='button'>register?</button></Link>
    
    </form>
</div>
  )
}

export default ResetPassword