import React from "react";

import Navbar from "../components/Navbar";
import heroText from "../assets/images/heroText.png";
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
      <div className="flex justify-center pt-3 pb-6">
        <img src={heroText} alt="spirit of america USA icon" />
      </div>

      {/* About Robbie text blurb */}
      <div className="flex justify-end pr-12 pt-4">
        <div className="flex flex-col items-end w-5/6">
          <p className="text-base tracking-widest text-[#2B2A64]">
            ABOUT ROBBIE
          </p>
          <p className="text-3xl font-bold tracking-widest text-[#2B2A64]">
            DEBUG AMERICA
          </p>
          <p className="w-full h-36 text-xs tracking-wider text-right text-[#2B2A64]">
            Robbie is not your average presidential candidate. He began his
            career as a coding TA, teaching students the valuable skills needed
            to thrive in the 21st century. An avid foosball player, he honed his
            strategic thinking and teamwork abilities both in the classroom and
            on the playing field. Most importantly, he is a proud golden
            retriever enthusiast, with a heart full of love and compassion for
            his furry friends and the American people.
          </p>
        </div>
      </div>
      {/* Speech img */}
      <img
        className=" h-[400px] w-full object-cover border-y-8 border-[#2B2A64]"
        src={speech}
        alt="Robbie giving a speech"
      />

      {/* tweets */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Robbie4Pr3z"
        options={{ theme: "dark" }}
      />

      {/* robbies family */}
      <img
            className=" h-[400px] w-full object-cover border-y-2 border-[#2B2A64]"
            src={family}
            alt="rob+wife"
          />
      <div className="flex justify-end pr-12 pt-4">
        <div className="flex flex-col items-end w-5/6">
          <p className="bg-[#C0504D] text-3xl font-bold tracking-widest text-[#FFFFFF]">
            Robbie's Family
          </p>
          <p className="w-full h-36 text-xs tracking-wider text-center text-[#2B2A64]">
            Robbie's family is the embodiment of love, unity, and cross-cultural
            understanding. His wife, Julie, hails from the beautiful country of
            France, and their partnership has only strengthened the bonds
            between the United States and France. Through their harmonious
            marriage, Robbie and Julie exemplify the power of international
            cooperation and demonstrate how our countries can work together to
            build a brighter, more prosperous future for all.
          </p>
        </div>
      </div>

      {/* mrcharliepup */}
      <div className="flex justify-end pr-12 pt-4">
        <div className="flex flex-col items-end w-5/6">
          <p className="bg-[#C0504D] text-3xl font-bold tracking-widest text-[#FFFFFF]">
            Robbie's Best Friend
          </p>
          <p className="w-full h-36 text-xs tracking-wider text-center text-[#2B2A64]">
            Robbie's deep-rooted love for golden retrievers is more than just a
            personal preference; it's a symbol of his dedication to spreading
            joy and companionship across the nation. If elected, Robbie promises
            to ensure every American family has the opportunity to experience
            the warmth and unconditional love of a golden retriever. By
            providing these lovable furry friends to households, he aims to
            create a happier, more compassionate society united by the special
            bond between humans and their canine companions.
          </p>

          <img
            className=" h-[400px] w-full object-cover border-y-2 border-[#2B2A64]"
            src={dog}
            alt="mrcharliepup"
          />
        </div>
      </div>

      {/* achievement */}
      <div className="flex justify-end pr-12 pt-4">
        <div className="flex flex-col items-end w-5/6">
          <p className="bg-[#C0504D] text-3xl font-bold tracking-widest text-[#FFFFFF]">
            Robbie's Achievements
          </p>
          <p className="w-full h-36 text-xs tracking-wider text-center text-[#2B2A64]">
            As a teenager, Robbie discovered a passion for foosball, and his
            ability to connect with others and share the lessons he learned from
            Buddy helped him lead his high school foosball team to victory.
            Against all odds, Robbie and his team made it to the national
            championship, where they united as one unstoppable force. The team's
            incredible triumph was a testament to Robbie's unwavering
            dedication, his ability to inspire others, and the enduring impact
            of the invaluable life lessons he learned from his beloved golden
            retriever, Buddy.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-12 pb-6">
        <img
          className="  h-[400px] w-full object-cover border-y-2 border-[#2B2A64]"
          src={foosball}
          alt="foosball"
        />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
