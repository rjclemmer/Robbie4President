import React from "react";

import Navbar from "../components/Navbar";
import heroText from "../assets/images/heroText.png";
import speech from "../assets/images/speech.JPEG";
import family from "../assets/images/family.webp";
import dog from "../assets/images/dog.webp";
import foosball from "../assets/images/foosball.webp";
import Footer from "../components/Footer";

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
      <a class="twitter-timeline" href="https://twitter.com/Robbie4Pr3z?ref_src=twsrc%5Etfw">Tweets by Robbie4Pr3z</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    
      {/* robbies family */}
      <div class="flex block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 class="bg-red mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          ROBBIE’S FAMILY
        </h5>
        <img
          className="absolute inset-0 h-[200px] w-full object-cover object-left pt-6"
          src={family}
          alt="Robbie and wife"
        />
        <div class="p-6">
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
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
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 class="bg-#C0504D mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          BEST FRIEND
        </h5>
        <img
          className="absolute inset-0 h-[200px] w-full object-cover object-left pt-6"
          src={dog}
          alt="Robbie and wife"
        />
        <div class="p-6">
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Robbie's deep-rooted love for golden retrievers is more than just a
            personal preference; it's a symbol of his dedication to spreading
            joy and companionship across the nation. If elected, Robbie promises
            to ensure every American family has the opportunity to experience
            the warmth and unconditional love of a golden retriever. By
            providing these lovable furry friends to households, he aims to
            create a happier, more compassionate society united by the special
            bond between humans and their canine companions.
          </p>
        </div>
      </div>
      {/* achievement */}
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 class="bg-#C0504D mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Achievement
        </h5>
        <img
          className="absolute inset-0 h-[200px] w-full object-cover object-left pt-6"
          src={foosball}
          alt="Robbie and wife"
        />
        <div class="p-6">
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
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

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
