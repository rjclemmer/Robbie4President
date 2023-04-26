import React from 'react';

const Footer = () => {
    return (
    <div className='bg-[#C0504D] h-[200px] flex flex-col justify-center'>
         <ul className='justify-center md:text-xl'>
                    <li className='flex justify-center p-2 hover:opacity-70'><a className='ml-1 text-white' href="/">HOME</a></li>
                    <li className='flex justify-center p-2 hover:opacity-70'><a className='ml-1 text-white' href="#work" >ABOUT ROBBIE</a></li>
                    <li className='flex justify-center p-2 hover:opacity-70'><a className='ml-1 text-white' href="/">SIGN UP</a></li>
                    <a className='flex justify-center p-2 hover:opacity-70 ml-1 text-white' href="https://twitter.com/Robbie4Pr3z?ref_src=twsrc%5Etfw"  class="twitter-follow-button"  data-show-count="false">Follow @Robbie4Pr3z</a><script async src="https://platform.twitter.com/widgets.js " charset="utf-8"></script>
                    {/* <li className='flex justify-center p-2 hover:opacity-70'><a className='ml-1 text-white' href="https://github.com/jakeroth0" target="blank" rel="noopener noreferrer">TWEETS</a></li> */}
                </ul>
    </div>

)}
export default Footer; 