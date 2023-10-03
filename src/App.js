import React from 'react'
import { Landing, About, ProtectedRoutes, Error } from './pages'
import { Profile, MyOrders, Register, SharedLayout, Orders, Cart, ResetPassword, StripeCheckout } from './pages/Dashboard.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SingleProduct} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/>} />


      <Route path='profile' element={
        <ProtectedRoutes>
          <Profile/>
      </ProtectedRoutes>
      }></Route>

      <Route path='my-orders' element={
        <ProtectedRoutes>
          <MyOrders/>
      </ProtectedRoutes>
      }></Route>

      <Route path='create-orders' element={
        <ProtectedRoutes>
          <Orders/>
      </ProtectedRoutes>
      }></Route>

      <Route path='cart' element={
              <ProtectedRoutes>
                <Cart/>
            </ProtectedRoutes>
            }></Route>
      <Route path='checkout' element={
              <ProtectedRoutes>
                <StripeCheckout/>
            </ProtectedRoutes>
            }></Route>

        {/* <Route path='my-orders' element={<MyOrders />} /> */}
          {/* <Route path='craete-orders' element={<Orders />} /> */}
          {/* <Route path='cart' element={<Cart />} /> */}


        <Route path='register' element={<Register/>} />
        <Route path='resetPassword' element={<ResetPassword/>} />

        
        <Route path='/:id' element={<SingleProduct/>} />
        <Route path='about' element={<About/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  )
}

export default App