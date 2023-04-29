import React from "react";
import AuthService from "../utils/auth";
import { TwitterFollowButton } from "react-twitter-embed";
const Footer = () => {
  return (
    <div className="bg-[#C0504D] h-[200px] flex flex-col justify-center">
      <ul className="justify-center md:text-xl">
        <li className="flex justify-center p-2 hover:opacity-70 font-bold">
          <a className="ml-1 text-white" href="/">
            HOME
          </a>
        </li>
        <li className="flex justify-center p-2 hover:opacity-70 font-bold">
          <a className="ml-1 text-white" href="/about">
            ABOUT ROBBIE
          </a>
        </li>
        {
  !AuthService.loggedIn() && (
    <>
        <li className="flex justify-center p-2 hover:opacity-70 font-bold">
          <a className="ml-1 text-white" href="/">
            SIGN UP
          </a>
        </li>
        </>
  )
}
{
  AuthService.loggedIn() && (
    <li className="flex justify-center p-2 hover:opacity-70 font-bold">
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

        {/* tweets */}
        <div className="flex justify-center p-2">
        <TwitterFollowButton screenName="Robbie4Pr3z" showCount={false} />
        </div>
        {/* <li className='flex justify-center p-2 hover:opacity-70'><a className='ml-1 text-white' href="https://github.com/jakeroth0" target="blank" rel="noopener noreferrer">TWEETS</a></li> */}
      </ul>
    </div>
  );
};
export default Footer;
