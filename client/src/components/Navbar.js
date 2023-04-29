import React, { useState, useContext } from 'react';
import AuthService from '../utils/auth';


// import styles from '../App.css'
import BurgerMenuIcon from '../assets/icons/BurgerMenuIcon';
import XIcon from '../assets/icons/XIcon';
import SignatureBlueIcon from '../assets/icons/SignatureBlueIcon'
import SignatureWhiteIcon from '../assets/icons/SignatureWhiteIcon'
import heroImgMobile from '../assets/images/heroImgMobile.webp'
import heroImgDesktop from '../assets/images/heroImgDesktop.webp'
import heroTextWhite from '../assets/images/heroTextWhite.png'

function Navbar(props) {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const SlideInMenu = ({ open, setClose }) => {
        return (
          <div
            className={`fixed top-0 right-0 h-screen w-52 p-7 z-20 transition-transform duration-300 flex flex-col ${
              open ? 'transform-none' : 'translate-x-full'} bg-[#2B2A64] md:w-[280px]`}
          >
            <button
              onClick={setClose}
              className="flex text-white justify-end items-center text-right mb-8 focus:outline-none focus:ring focus:ring-offset-2"
            >
              Close <XIcon />
            </button>
    
            {/* Add your menu items */}
            <ul className='justify-center md:text-xl'>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/" onClick={setClose}>HOME</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/about"  onClick={setClose}>ABOUT ROBBIE</a></li>
                    {
  !AuthService.loggedIn() && (
    <>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/">SIGN UP</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href='/login'>LOGIN</a></li>
                    </>
  )
}
{
  AuthService.loggedIn() && (
    <li className="flex justify-center p-1 hover:opacity-70">
      <a
        className="ml-1 text-white"
        href="/"
        onClick={() => {
          AuthService.logout();
        }}
      >
        LOGOUT
      </a>
    </li>
  )
}

                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/ask">ASK ROBBIE</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/">STORE</a></li>
                </ul>
          </div>
        );
      };

      const Scrim = ({ open, setClose }) => (
        <div
          className={`${
            open ? 'block' : 'hidden'
          } fixed inset-0 bg-black opacity-50 z-10`}
          onClick={setClose}
        ></div>
      );

    return (
      <nav className={`hero-image items-center px-3 pt-3  xl:px-[8%] bg-center bg-no-repeat bg-cover min-h-[300px] md:min-h-[600px] lg:min-h-[728px] ${props.styl}`}>
        <ul className=" max-w-full max-h-full flex justify-between xl:mx-4 lg:justify-center"> 
            <a className="flex items-center lg:hidden" href='/'>
            <SignatureWhiteIcon className='w-56 h-auto' />
            </a>
            <div className='pt-3 text-white lg:hidden'>
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`focus:outline-none focus:ring focus:ring-offset-2`}>
                <BurgerMenuIcon className="h-auto md:w-10"/>
            </button>
            <Scrim open={menuOpen} setClose={() => setMenuOpen(false)} />
            <SlideInMenu open={menuOpen} setClose={() => setMenuOpen(false)} />
            </div>
            <div className='hidden lg:flex lg:justify-center lg:w-full'>
                <ul className='lg:w-[85%] text-white'>
                    <div className={`flex justify-evenly`}>
                    <a className={`my-5 pl-12 xl:pl-24 hover:text-[#BF4D49]`} href="/">HOME</a>
                    <a className={`my-5 hover:text-[#BF4D49]`} href="/about">ABOUT ROBBIE</a>
                    <a className="hidden items-center lg:flex hover:text-[#BF4D49]" href='/'>
                       <SignatureWhiteIcon className='w-56 h-auto' />
                    </a>
                    {
  !AuthService.loggedIn() && (
    <>
                    <a className={`my-5 hover:text-[#BF4D49]`} href='/signup'>SIGN UP</a>
                    <a className={`my-5 hover:text-[#BF4D49]`} href='/login'>LOGIN</a>
                    </>
  )
}
<a className={`my-5 hover:text-[#BF4D49]`} href='/ask'>ASK ROBBIE</a>
{
  AuthService.loggedIn() && (
    <li className="flex justify-centerhover:opacity-70">
      <a
        className="my-5 pr-28 hover:text-[#BF4D49]"
        href="/"
        onClick={() => {
          AuthService.logout();
        }}
      >
        LOGOUT
      </a>
      
    </li>
  )
}

                    
                    </div>
                </ul>
            </div>    
        </ul>
        <div className='flex justify-center text-center text-white text-3xl font-bold md:justify-around md:pt-20 lg:pt-36'>
          <img className=' border-green-400' src={heroTextWhite} alt="" />
          <p className='hidden md:flex md:pt-5'>GIT PUSH<br/>WHITE HOUSE<br/>ROBBIE</p>
        </div>
      </nav>
    );
  }

  export default Navbar