import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/custommike-navbar-logo.svg";
import chaticon from "../../assets/images/create-design-pages/ChatsTeardrop-d.svg"
import profilepics from "../../assets/images/create-design-pages/profile-pics.svg"


function CreateDesignNav() {
  return (
    <nav className='className= fixed top-0 left-0 right-0 z-50'>
      <div className="flex flex-row items-center justify-between px-10 py-5">
          <div className="left-nav flex items-center gap-5">
            <img src={logo} alt="Logo" className="logo w-52" />
          </div>
          <div className='flex items-center gap-[24px]'>
          <button className='font-medium text-lg cursor-pointer text-primary-black hover:text-primary-blue-500 transition duration-300'>
             How it's works?
          </button>
          <button className='cursor-pointer text-primary-black hover:text-primary-blue-500 transition duration-300'>
            <img src={chaticon} alt="Chat Icon" className='w-[40px] h-[40px]' />
          </button>
          <button className='cursor-pointer text-primary-black hover:text-primary-blue-500 transition duration-300'>
            <img src={profilepics} alt="Chat Icon" className='w-[40px] h-[40px]' />
          </button>
          </div>
        </div>
    </nav>
  );
}

export default CreateDesignNav;
