import React, { useState, useContext } from 'react';

// import styles from '../App.css'
import BurgerMenuIcon from '../assets/icons/BurgerMenuIcon';
import XIcon from '../assets/icons/XIcon';
import SignatureBlueIcon from '../assets/icons/SignatureBlueIcon'

function NavbarHome(props) {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const SlideInMenu = ({ open, setClose }) => {
        return (
          <div
            className={`fixed top-0 right-0 h-screen w-52 p-7 z-20 transition-transform duration-300 flex flex-col ${
              open ? 'transform-none' : 'translate-x-full'} bg-[#1F2235] md:w-[280px]`}
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
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/">SIGN UP</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href='/login'>LOGIN</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="/ask" target="blank" rel="noopener noreferrer">ASK ROBBIE</a></li>
                    <li className='flex justify-center p-1 hover:opacity-70'><a className='ml-1 text-white' href="https://github.com/jakeroth0" target="blank" rel="noopener noreferrer">STORE</a></li>
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
      <nav className={`items-center px-5 pt-4  xl:px-[8%]`}>
        <ul className=" max-w-full max-h-full flex justify-between xl:mx-4 "> 
            <a className="flex items-center" href='/'>
            <SignatureBlueIcon className='w-56 h-auto' />
            </a>
            <div className='xl:hidden'>
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`focus:outline-none focus:ring focus:ring-offset-2`}>
                <BurgerMenuIcon className="h-auto md:w-10"/>
            </button>
            <Scrim open={menuOpen} setClose={() => setMenuOpen(false)} />
            <SlideInMenu open={menuOpen} setClose={() => setMenuOpen(false)} />
            </div>
            <div className='hidden xl:block'>
                <ul className='flex justify-start items-center'>
                    <div className={``}>
                    <a className={`mx-4`} href="#aboutMe">ABOUT ME</a>
                    <a className={`mx-4`} href="/about">WORK</a>
                    <a className={`mx-4`} href='/' download>RESUME</a>
                    </div>
                </ul>
            </div>    
        </ul>
      </nav>
    );
  }

  export default NavbarHome