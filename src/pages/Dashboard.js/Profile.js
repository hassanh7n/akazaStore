import React, { useState } from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import {updateUser, updatePassword, logoutUser, logouttUser} from '../../features/User';
import FormRow from './FormRow';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const {isLoading, user, Loading} = useSelector((store) => store.user);
  console.log(user);
  const [userData, setUserData] = useState({
    name : user?.name || '',
    email : user?.email || '',
    hobby : user?.hobby || '',
  });
  const [userPasData, setUserPasData] = useState({
    oldPassword : '',
    newPassword : ''
  });
  const handleSubmitt = (e) => {
    e.preventDefault();
    const {oldPassword, newPassword} = userPasData;
    if(!oldPassword || !newPassword){
      toast.error('Please Fill Out both Fields')
      return
    };
    dispatch(updatePassword({oldPassword, newPassword}))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const {name, email, hobby} = userData;
    if(!name || !email || !hobby){
      toast.error('Please Fill Out All Fields')
      return
    };
    dispatch(updateUser({name, email, hobby}))
  };
  
  const handleChangee = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserPasData({...userPasData, [name] : value})
  }
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name] : value})
  }


  
  const [showLogout, setShowLogout] = useState(false)
  const Navigate = useNavigate();
  const onclick = () => {
    dispatch(logoutUser());
    dispatch(logouttUser());
    Navigate('/')
  }
  return (
    <>
    <Wrapper>
      <div className="butn">

      <><Link className='link' to='/'><h5>Back to home page?</h5></Link></>
      <div className="btn-container">
          <button 
          className='btn'
          type='button'
          onClick={() =>setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
            type='button'
            className='dropdown-btn'
            onClick={() => onclick()}
            >
              logout
            </button>
          </div>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="form">
      <h3>Profile</h3>

      <div className="form-center">
        <FormRow 
        type='text'
        name='name'
        value={userData.name}
        handleChange={handleChange}
        />
        <FormRow 
        type='text'
        name='hobby'
        value={userData.hobby}
        handleChange={handleChange}
        />
        <FormRow 
        type='email'
        name='email'
        value={userData.email}
        handleChange={handleChange}
        />
        <button 
        className="btn btn-block"
        type='submit'
        disabled={isLoading}
        >
          {isLoading ? 'Plaese wait ...' : 'save changes'}
        </button>



      </div>

      </form>


      {/* update password */}


      <form action="" onSubmit={handleSubmitt} className="form">
      <h3>update password</h3>

      <div className="form-center">
        <FormRow 
        type='text'
        name='oldPassword'
        value={userPasData.oldPassword}
        handleChange={handleChangee}
        />
        <FormRow 
        type='text'
        name='newPassword'
        value={userPasData.newPassword}
        handleChange={handleChangee}
        />
        <button 
        className="btn btn-block"
        type='submit'
        disabled={Loading}
        >
          {Loading ? 'Please wait...' : 'save changes'}
        </button>



      </div>

      </form>
    </Wrapper>

    
        </>
  )
}


const Wrapper = styled.main`
border-radius: var(--borderRadius);
width: 100%;
background: background-color: #D3D3D3;;
padding: 3rem 1rem;
box-shadow: var(--shadow-2);
@media (min-width: 600px) {
  padding: 3rem 2rem 4rem;
}
.form{
  border: 5px solid var(--primary-500);
}
.link{
  color : black
}
.butn{
  display : flex;
  width : 100%;
  justify-content : space-between;
}
.toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  /* background: var(--primary-50); */
  .btn-container {
    position: relative;
  } 
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 52px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }

h3 {
  margin-top: 0;
}
.form {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 2rem;
  max-width: 100%;
  width: 100%;
  margin-top : 4rem;
}
.form-row {
  margin-bottom: 0;
}
.form-center {
  display: grid;
  row-gap: 0.5rem;
}
.form-center button {
  align-self: end;
  height: 35px;
  margin-top: 1rem;
}
/* .btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  align-self: flex-end;
  margin-top: 0.5rem;
  button {
    height: 35px;
  }
} */
.clear-btn {
  background: var(--grey-500);
}
.clear-btn:hover {
  background: var(--black);
}
@media (min-width: 992px) {
  .form-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }
  .btn-container {
    margin-top: 0;
  }
}
@media (min-width: 1120px) {
  .form-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .form-center button {
    margin-top: 0;
  }
}
`

export default Profile