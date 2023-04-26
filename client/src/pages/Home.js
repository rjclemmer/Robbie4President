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
import SignupForm from './Signup';


const Home = () => {
  // set initial form state
  
  return (
    // container for entire page
    <div className='' >
      {/* navbar */}
    <NavbarHome />
    {/* USA and hero text */}
    <div className='flex justify-center pt-3 pb-6'>
      <img src={heroText} alt="spirit of america USA icon" />
    </div>
    {/* Whitehouse blue background */}
    <img src={heroHome} alt="White House background" />
    {/* About Robbie text blurb */}
    <div className='flex justify-end pr-12 pt-4'>
      <div className="flex flex-col items-end w-5/6">
          <p className="text-base tracking-widest text-[#2B2A64]">ABOUT ROBBIE</p>
          <p className="text-3xl font-bold tracking-widest text-[#2B2A64]">DEBUG AMERICA</p>
          <p className="w-full h-36 text-xs tracking-wider text-right text-[#2B2A64]">Robbie is not your average presidential candidate. He began his career as a coding TA, teaching students the valuable skills needed to thrive in the 21st century. An avid foosball player, he honed his strategic thinking and teamwork abilities both in the classroom and on the playing field. Most importantly, he is a proud golden retriever enthusiast, with a heart full of love and compassion for his furry friends and the American people.</p>
      </div>
    </div>
    {/* Speech img */}
    <img className=' h-[400px] w-full object-cover border-y-8 border-[#2B2A64]' src={speech} alt="Robbie giving a speech" />
    {/* coder-in-chief checkbox blurb */}
    <div className='flex flex-col items-center justify-center pt-3'>
      <div className='flex flex-col justify-start'>
        <p className='text-[#2B2A64] font-normal'>THE CODER-IN-CHIEF</p>
        <p className='text text-[#BF4D49] font-bold text-3xl pt-1'>PAWSITIVE FUTURE</p>
      </div>
      <div className='flex flex-col'>
        <div className='flex pt-3'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4'>npm install me please</p>
        </div>
        <div className='flex pt-3'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4'>npm running for pres lol</p>
        </div>
        <div className='flex pt-3'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4'>git push Robbie into office</p>
        </div>
        <div className='flex pt-3'>
          <CheckBoxIcon />
          <p className='text-xs tracking-wider text-right text-[#2B2A64] pl-4'>git checkout this campaign</p>
        </div>
      </div>
    </div>
    {/* Red Reaching crowd img */}
    <div className='relative flex items-end justify-center h-[200px]'>
      <img className=' absolute inset-0 h-[200px] w-full object-cover object-left pt-6' src={crowdRob} alt="Robbie giving a speech" />
      <a className='relative z-10 mb-1 text-lg text-white font-semibold' href="/">
        <div className='flex flex-col items-center'>
          <p>DONATE TO</p>
          <p>FOOSBALL KING {'>>'}</p>
        </div>
      </a>
    </div>
    {/* Blue crowd crowd img */}
    <div className='relative flex items-end justify-center h-[176px]'>
      <img className=' absolute inset-0 h-[176px] w-full object-cover object-top' src={bigCrowdRob} alt="Robbie giving a speech" />
      <a className='relative z-10 mb-1 text-lg text-white font-semibold' href="/">
        <div className='flex flex-col items-center'>
          <p>SIGN UP</p>
          <p>LOOPING THROUGH PROGRESS {'>>'}</p>
        </div>
      </a>
    </div>
    {/* Sign up Form */}
    <div className="flex justify-center pt-3">
  <div className="inline-flex flex-col space-y-2 items-center justify-start w-80" style={{ height: 'calc(100% - 380px)' }}>
    <p className="text-base font-semibold text-[#BF4D49] uppercase">JOIN ROBBIE</p>
    <p className="text-3xl font-bold text-center text-[#2B2A64]">FOR A FULLY <br />RESPONSIVE NATION</p>

    <SignupForm />

    <p className="w-80 h-24 text-xs tracking-wider text-[#2B2A64]">A Golden Retriever in Every Home: To boost happiness and companionship nationwide, Robbie will launch a pet adoption initiative to ensure every American family has the opportunity to welcome a loving golden retriever into their lives.</p>
    <button className="w-80 h-9 py-1 font-bold tracking-widest text-white bg-[#BF4D49]" type="submit">SIGN UP</button>
  </div>
</div>
    {/* tree robbie */}
    <div className='flex justify-center pt-12 pb-6'>
    <img className=' h-[400px] w-[400px] object-cover  ' src={treeRob} alt="smiling in front of trees" />
    </div>
    {/* footer */}
    <Footer />
    </div>
  );
};

export default Home;
