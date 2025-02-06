import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import banner from "../assets/banner.png";
import right from "../assets/right.png";
import bottom from "../assets/bottom.png";

export default function Hero() {
  const bannerRef = useRef(null);
  let moveTimeout = null;

  useEffect(() => {
    const handleMouseMove = () => {
      
      clearTimeout(moveTimeout);

      
      gsap.to(bannerRef.current, {
        x: (Math.random() - 0.1) * 1, 
        y: (Math.random() - 6) * 3, 
        duration: 0.01,
        ease: "power1.inOut",
      });

      
      moveTimeout = setTimeout(() => {
        gsap.to(bannerRef.current, { x: 0, y: 0, duration: 0.2 });
      }, 50);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <div className="hero-container bg-gradient-to-r from-[#F7F6F2] pt-20 to-[#FBE9E7]">
      <div className="flex flex-col md:flex-row z-20 px-6 py-12 md:py-20">
        {/* Left Side Content */}
        <div className="md:w-2/2 text-center pt-20 md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Highest payouts in the industry -{" "}
            <span className="text-red-600">91%</span>
          </h1>
          <p className="mt-8 max-w-sm text-gray-600 text-lg">
            🚀 Sign up now &{" "}
            <span className="text-red-500 font-bold">
              take home 100% for your first 3 months!
            </span>
          </p>
          {/* Buttons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="bg-gradient-to-r from-[#F92716] to-[#C51003] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90">
              Sign Up
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 bg-red-100 rounded-full font-semibold hover:bg-gray-300">
              Login
            </button>
          </div>
        </div>

        {/* Banner Side Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center z-20">
          <img
            ref={bannerRef}
            src={banner}
            alt="Banner"
            className="w-80 md:w-full max-w-md drop-shadow-lg"
          />
        </div>

        <img
          src={right}
          alt="Banner"
          className="w-80 md:w-36 max-w-md drop-shadow-lg pl-4"
        />
      </div>
      
      {/* Bottom image */}
      <div className="flex justify-center">
        <img src={bottom} alt="" className="relative left-24 bottom-96 w-96 z-0" />
      </div>
    </div>
  );
}
