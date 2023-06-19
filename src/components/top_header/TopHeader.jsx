import React from 'react'
import mainlogo from '../../img/mainlogo.png'
import userimg from '../../img/user.png'
import './TopHeader.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import '../../../public/img/mainlogo'

import { useState } from 'react';
export default function TopHeader() {
  const user= useSelector((state)=> state.login?.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  console.log("abc")
  console.log(user)
  function handleUserImgClick() {
    setIsOpen(!isOpen);
  };
  const Navigate = useNavigate();
  function handleLogoClick() {
      Navigate('/');
  }
  return (
    <div className='topheader'>
      <div  onClick = {handleLogoClick} className='topHeader-part'> 
         <img
          className="Header_Logo"
          src={mainlogo}
          alt="logo"
        />
        <div className='nameapp'>
            Hogwart
        </div>
        </div>
        <div className='topHeader-part topHeader-part-user'>
            <div className='topHeader-user-username'>
                { user?.userName || "" }
            </div>
            <img
          className="topHeader-userimg"
          src={userimg}
          alt="logo"
          onClick={handleUserImgClick}
        />
         {isOpen && (
              <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <i className="fas fa-id-card" aria-hidden="true"></i>
                Hồ sơ
              </a>
              <a href="#" className="dropdown-item">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                Tin nhắn
              </a>
              <a href="#" className="dropdown-item">
                <i className="fa fa-cog" aria-hidden="true"></i>
                Tùy chọn
              </a>
              <a href="login" className="dropdown-item">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                Đăng xuất
              </a>
            </div>
            
            )}
        </div>    
    </div>
  )
}
