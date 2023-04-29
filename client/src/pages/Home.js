import React from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';
// import Navbar from '../components/Navbar';
import NavbarHome from '../components/NavbarHome';
import heroText from '../assets/images/heroText.png'
import heroHome from '../assets/images/heroHome.png'
import speech from '../assets/images/speech.JPEG'
import CheckBoxIcon from '../assets/icons/CheckBoxIcon'
import crowdRob from '../assets/images/crowdRob.webp'
import bigCrowdRob from '../assets/images/bigCrowdRob.webp'
import treeRob from '../assets/images/treeRob.webp'
import Footer from '../components/Footer'
import SignupForm from '../components/SignupForm';
import heroTextWhite from '../assets/images/heroTextWhite.png'


const Home = () => {
  // set initial form state

  return (
    // container for entire page
    <div className='' >
      {/* navbar */}
    <NavbarHome />
    {/* USA and hero text */}
    <div className='flex justify-center pt-3 pb-6 md:hidden'>
      <img src={heroText} alt="spirit of america USA icon" />
    </div>

    {/* Whitehouse blue background */}
    <img className='md:hidden' src={heroHome} alt="White House background" />
    <div className='lg:flex lg:w-full lg:grow '>
      <div className='hidden md:block md:mt-4 hero-home bg-center items-center bg-no-repeat bg-cover min-h-[300px] md:min-h-[600px] lg: lg:mt-0 lg:w-full lg:bg-cover'>
          <div className='flex justify-around text-center text-white text-3xl font-bold md:pt-48 lg:pt-48'>
            <img className=' border-green-400' src={heroTextWhite} alt="" />
            <p className='hidden md:flex md:pt-5'>GIT PUSH<br/>WHITE HOUSE<br/>ROBBIE</p>
          </div>
      </div>
    </div>

    <div className='md:flex md:justify-around md:pt-6 md:px-14 lg:px-64'>
    {/* About Robbie text blurb */}
    <div className='flex justify-end pr-12 pt-4 md:order-2 md:justify-center md:text-right md:pr-0 lg:justify-end'>
      <div className="flex flex-col items-end w-5/6">
          <p className="text-base tracking-widest text-[#2B2A64]">ABOUT ROBBIE</p>
          <p className="text-3xl font-bold tracking-widest text-[#2B2A64] lg:text-4xl">DEBUG AMERICA</p>
          <p className="w-full h-36 text-xs tracking-wider text-right text-[#2B2A64] md:h-auto md:pb-4 lg:text-sm">Robbie is not your average presidential candidate. He began his career as a coding TA, teaching students the valuable skills needed to thrive in the 21st century. An avid foosball player, he honed his strategic thinking and teamwork abilities both in the classroom and on the playing field. Most importantly, he is a proud golden retriever enthusiast, with a heart full of love and compassion for his furry friends and the American people.</p>
          <a className='text-[#BF4D49] border-2 py-0.5 px-7 border-[#BF4D49] mb-4 hover:bg-[#BF4D49] hover:text-white hover:border-white' href='/about'>READ MORE</a>
      </div>
    </div>
    {/* Speech img */}
    <img className=' h-[400px] w-full object-cover border-y-8 border-[#2B2A64] md:order-1 md:w-[337px] md:h-[320px] md:border-0 lg:w-[440px] lg:h-[418px]' src={speech} alt="Robbie giving a speech" />
    </div>

    {/* line */}
    <div className='md:h-[6px] md:bg-[#2A2868] lg:mx-64'></div>

    {/* coder-in-chief checkbox blurb */}
    <div className='flex flex-col items-center justify-center pt-3 lg:my-6'>
      <div className='flex flex-col justify-start'>
        <p className='text-[#2B2A64] font-normal'>THE CODER-IN-CHIEF</p>
        <p className='text text-[#BF4D49] font-bold text-3xl pt-1 md:text-5xl'>PAWSITIVE FUTURE</p>
      </div>
      <div className='flex flex-col'>
        <div className='flex pt-3 md:items-center'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl'>npm install me please</p>
        </div>
        <div className='flex pt-3 md:items-center'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl'>npm running for pres lol</p>
        </div>
        <div className='flex pt-3 md:items-center'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl'>git push Robbie into office</p>
        </div>
        <div className='flex pt-3 md:items-center'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4 md:text-2xl'>git checkout this campaign</p>
        </div>
      </div>
    </div>

    <div className='md:flex md:w-full md:pt-8 lg:justify-center lg:px-24'>
      {/* Red Reaching crowd img */}
      <div className='relative flex items-end justify-center h-[200px] md:order-2 md:w-1/2 md:h-[224px] lg:h-[350px]'>
        <img className=' absolute inset-0 h-[200px] w-full object-cover object-left pt-6 md:h-[224px] md:pt-0 lg:h-[350px]' src={crowdRob} alt="Robbie giving a speech" />
        <a className='relative z-10 mb-1 text-lg text-white font-semibold' href="/">
          <div className='flex flex-col items-center hover:underline'>
            <p>DONATE TO</p>
            <p>FOOSBALL KING {'>>'}</p>
          </div>
        </a>
      </div>
      {/* Blue crowd crowd img */}
      <div className='relative flex items-end justify-center h-[176px] md:order-1 md:w-1/2 md:h-[224px] lg:h-[350px]'>
        <img className=' absolute inset-0 h-[176px] w-full object-cover object-top md:h-[224px] lg:h-[350px]' src={bigCrowdRob} alt="Robbie giving a speech" />
        <a className='relative z-10 mb-1 text-lg text-white font-semibold' href="/signup">
          <div className='flex flex-col items-center hover:underline'>
            <p>SIGN UP</p>
            <p>LOOPING THROUGH PROGRESS {'>>'}</p>
          </div>
        </a>
      </div>
    </div>

    <div className='md:flex md:py-8 md:w-full md:px-16 lg:px-24'>
      {/* Sign up Form */}
      <div className="flex justify-center pt-3 w-[100%] md:order-2 md:w-1/2 md:pl-2 lg:pl-0">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-semibold text-[#BF4D49] uppercase lg:text-xl">JOIN ROBBIE</p>
          <p className="text-3xl font-bold text-center text-[#2B2A64] lg:text-5xl mb-4">FOR A FULLY <br />RESPONSIVE NATION</p>

          <SignupForm />

        </div>
      </div>
      {/* tree robbie */}
      <div className='flex justify-center pt-4 pb-6 md:order-1 md:w-1/2 md:items-center md:pt-0 md:pb-0 md:pr-2 lg:pr-0'>
      <img className=' h-[400px] w-[400px] object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[600px]' src={treeRob} alt="smiling in front of trees" />
      </div>
    </div>

    {/* footer */}
    <Footer />
    </div>
  );
};

export default Home;
