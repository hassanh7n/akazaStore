import React from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";
import {FaShoppingCart} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, logouttUser } from '../features/User';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import SideBar from './SideBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const {isSidebarOpen} = useSelector((store) => store.user);
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <div className="wrapper">
     
        <div className="main-div">
          <div className="first">
          <h2 className='head'>AKAZA~</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="profile">Account</a></li>
              <li><a href="my-orders">My Orders</a></li>
            </ul>
            <div className='btns'>

            <button
              type='button'
              className='cart-btn'
              >
                <a href="cart"><FaShoppingCart className='icn' /></a>
              
            </button>
            <button
              type='button'
              className='toggle-btn'
              onClick={toggle}
              >
              <FiMenu />
            </button>

            </div>
          </div>
            
            <div className="second">
              <h3 className='slide'>New Collections</h3>
              <h3 className='slide'>Shop Now</h3>
            </div>
            <SideBar />
        </div>

    </div>
  )
}

export default Navbar