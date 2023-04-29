import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import SignupForm from '../components/SignupForm'
import Footer from '../components/Footer';
import redFoosball from '../assets/images/redFoosball.webp'
import blueDog from '../assets/images/blueDog.webp'

const Signup = () =>{
  return (
    <div>
      <Navbar styl=''/>
      <div className="flex flex-col justify-center py-8 px-8 mx-8 mt-4 mb-8 bg-[#2B2A64] text-center md:mx-32 lg:mx-[30%] lg:mb-10">
      <h1 className="text-white text-3xl font-bold mb-3">BECOME A CAMPAIGN<br/>DEPENDENCY</h1>
        <SignupForm textColor='text-white w-full' />
      </div>
      
      <div className='hidden lg:flex lg:w-full lg:justify-between lg:items-center lg:mb-8'>
        <img className='w-[380px]' src={redFoosball} alt="" />
        <p className='text-[#2B2A64] text-3xl font-bold text-center'>SUPPORT THE<br/>MOVEMENT</p>
        <img className='w-[380px]' src={blueDog} alt="" />
      </div>

      <div className="">
        <Footer />
      </div>

    </div>
  );
};

export default Signup;
