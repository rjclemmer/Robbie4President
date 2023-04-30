import React from "react";

import Navbar from "../components/Navbar";
import speech from "../assets/images/speech.JPEG";
import family from "../assets/images/family.webp";
import dog from "../assets/images/dog.webp";
import foosball from "../assets/images/foosball.webp";
import Footer from "../components/Footer";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const About = () => {
  // set initial form state

  return (
    // container for entire page
    <div className="">
      {/* navbar */}
      <Navbar />
      {/* USA and hero text */}
      {/* <div className="flex justify-center pt-3 pb-6">
        <img src={heroText} alt="spirit of america USA icon" />
      </div> */}

<div className='md:flex md:justify-around md:pt-6 md:pb-6 md:px-14 lg:px-[15%]'>
    {/* About Robbie text blurb */}
    <div className='flex justify-end pr-12 pt-4 md:order-2 md:justify-center md:text-right md:pr-0 lg:justify-end'>
      <div className="flex flex-col items-end w-5/6 lg:w-full">
          <p className="text-base tracking-widest text-[#2B2A64]">ABOUT ROBBIE</p>
          <p className="text-2xl font-bold tracking-widest text-[#2B2A64] lg:text-4xl">DEBUG AMERICA</p>
          <p className="w-full mb-1 text-xs tracking-wider text-right text-[#2B2A64] md:h-auto md:pb-4 lg:text-sm lg:w-5/6">Robbie is not your average presidential candidate. He began his career as a coding TA, teaching students the valuable skills needed to thrive in the 21st century. An avid foosball player, he honed his strategic thinking and teamwork abilities both in the classroom and on the playing field. Most importantly, he is a proud golden retriever enthusiast, with a heart full of love and compassion for his furry friends and the American people.</p>
      </div>
    </div>
    {/* Speech img */}
    <img className=' h-[400px] w-full object-cover border-y-8 border-[#2B2A64] md:order-1 md:w-[337px] md:h-[320px] md:border-0 lg:w-[440px] lg:h-[418px]' src={speech} alt="Robbie giving a speech" />
    </div>

    {/* line */}
    <div className='md:h-[6px] md:bg-[#2A2868] lg:mx-[15%]'></div>
    <div className="py-4 px-12">
            <div className="flex justify-center">
              <p className="bg-[#2A2868] max-w-[700px] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
                LATEST TWEETS
              </p>
            </div>
      <div class="container mx-auto overflow-auto max-h-[700px] max-w-[700px] border-4 border-[#2A2868]">
      {/* tweets */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Robbie4Pr3z"
        options={{ theme: "dark" }}
      />
      </div>
      </div>
          {/* line */}
          <div className=" hidden md:h-[6px] md:bg-[#2A2868] lg:mx-64"></div>

      <div className="mx-4 md:px-4 lg:flex lg:justify-center lg:w-full">

      <div className="lg:w-full lg:max-w-[1445px] ">

        <div className="md:flex md:w-full lg:px-24 lg:pb-8">
          {/* robbies family */}
          <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
              {/* hidden until md */}
              <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 lg:flex lg:grow lg:justify-end">
                <img
                  className=" w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[723px]"
                  src={family}
                  alt="family"
                />
              </div>

              <div className="flex flex-col items-center justify-center md:w-1/2 md:px-2 md:justify-start lg:max-w-lg">

                <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
                  ROBBIE'S FAMILY{" "}
                </p>

                <div className="flex justify-center pb-3 pt-2 md:order-1 md:w-1/2 md:items-center md:pt-0 md:pb-0 md:pr-2 lg:pr-0 md:hidden">
                  <img
                    className=" w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[600px]"
                    src={family}
                    alt="family"
                  />
                </div>

                <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
                  Robbie is not your average presidential candidate. He began his
                  career as a coding TA, teaching students the valuable skills
                  needed to thrive in the 21st century. An avid foosball player, he
                  honed his strategic thinking and teamwork abilities both in the
                  classroom and on the playing field. Most importantly, he is a
                  proud golden retriever enthusiast, with a heart full of love and
                  compassion for his furry friends and the American people.
                </p>

              </div>
          </div>
        </div>

        <div className="md:flex md:w-full lg:px-24 lg:pb-8">
          {/* mrcharliepup */}
          <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
            {/* hidden until md */}
            <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 order-2 lg:flex lg:grow lg:justify-start">
                <img
                  className="  w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[723px]"
                  src={dog}
                  alt="mrcharliepup"
                />
              </div>

            <div className="flex flex-col items-center justify-center md:justify-start md:w-1/2 md:px-2 lg:max-w-lg">
              
              <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
                BEST FRIEND
              </p>

              <div className="flex justify-center pb-3 pt-2 md:order-1 md:w-1/2 md:items-center md:pt-0 md:pb-0 md:pr-2 lg:pr-0 md:hidden">
                <img
                  className=" w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[600px]"
                  src={dog}
                  alt="mrcharliepup"
                />
              </div>

              <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
                {" "}
                Robbie's deep-rooted love for golden retrievers is more than just
                a personal preference; it's a symbol of his dedication to
                spreading joy and companionship across the nation. If elected,
                Robbie promises to ensure every American family has the
                opportunity to experience the warmth and unconditional love of a
                golden retriever. By providing these lovable furry friends to
                households, he aims to create a happier, more compassionate
                society united by the special bond between humans and their canine
                companions.
              </p>

            </div>
          </div>
        </div>

        <div className="md:flex md:w-full lg:px-24 lg:pb-8">
          {/* achievement */}
          <div className="flex justify-center pt-3 w-[100%] lg:pl-0">
              {/* hidden until md */}
              <div className="hidden justify-center pb-3 md:w-1/2 md:flex md:pt-0 md:px-2 lg:flex lg:grow lg:justify-end">
                <img
                  className="w-full object-cover lg:w-full lg:max-w-[723px]"
                  src={foosball}
                  alt="foosball"
                />
              </div>

            <div className="flex flex-col items-center justify-center md:justify-start md:w-1/2 md:px-2 lg:max-w-lg">

              <p className="bg-[#C0504D] text-3xl font-bold w-full text-center text-[#FFFFFF] px-2 py-4 md:text-4xl">
                ACHIEVEMENTS
              </p>

              <div className="flex justify-center pb-3 pt-2 md:order-1 md:w-1/2 md:items-center md:pt-0 md:pb-0 md:pr-2 lg:pr-0 md:hidden">
                <img
                  className="w-full object-cover md:w-[426px] md:h-auto lg:w-full lg:max-w-[600px]"
                  src={foosball}
                  alt="foosball"
                />
              </div>

              <p className="w-[95%] text-s leading-5 text-center text-[#2B2A64] pt-1 pb-4 md:h-auto md:pb-4 lg:text-xl">
                Robbie is not your average presidential candidate. He began his
                career as a coding TA, teaching students the valuable skills
                needed to thrive in the 21st century. An avid foosball player, he
                honed his strategic thinking and teamwork abilities both in the
                classroom and on the playing field. Most importantly, he is a
                proud golden retriever enthusiast, with a heart full of love and
                compassion for his furry friends and the American people.
              </p>

            </div>
          </div>
        </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
