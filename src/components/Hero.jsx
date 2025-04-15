import React from "react";
import { GiHatchet } from "react-icons/gi"; // Changed from GiHatchet to GiChefHat for better icon match
import { FaGlassMartini, FaUsers } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-16"> {/* Added pt-16 for navbar space */}
      {/* Dark Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/dark-bg2.jpg" alt="Dark background" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container - adjusted for navbar */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left Content - Text and CTA */}
        <div className="w-full md:w-1/2 pt-24 md:pt-20 text-center md:text-left"> {/* Increased top padding */}
          <div className="mb-2 flex items-center justify-center md:justify-start">
            <div className="h-1 w-10 bg-warning mr-2"></div>
            <p className="text-warning font-semibold">PREMIUM SERVICE</p>
            <div className="h-1 w-10 bg-warning ml-2"></div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Welcome to</h1>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-warning mb-6">Angel Top Class Functions</h1>

          <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Elevating your special occasions with exceptional service and attention to detail. Our professional team of
            waiters and waitresses ensures your event runs flawlessly.
          </p>

          {/* Service Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <GiHatchet className="text-warning mr-2" size={24} />
              <span className="text-white">Event Setup</span>
            </div>
            <div className="flex items-center">
              <FaGlassMartini className="text-warning mr-2" size={24} />
              <span className="text-white">Food Serving</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="text-warning mr-2" size={24} />
              <span className="text-white">Clearing Up</span>
            </div>
            <div className="flex items-center">
              <AiFillStar className="text-warning mr-2" size={24} />
              <span className="text-white">VIP Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn btn-warning btn-lg">Book Our Services</button>
            <button className="btn btn-outline border-warning text-warning hover:bg-warning hover:text-black">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content - Team Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-warning"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-warning"></div>

            {/* Team Image */}
            <img
              src="bg.jpg"
              alt="Angel Top Class Events Team"
              className="w-full h-auto rounded-lg shadow-2xl object-cover z-20"
            />

            {/* Image Caption */}
            <div className="bg-warning text-black font-bold py-2 px-4 absolute -bottom-5 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg">
              Our Professional Team
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-28 left-10 w-20 h-20 border-2 border-warning/30 rounded-full animate-pulse hidden lg:block"></div> {/* Adjusted top position */}
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-warning/30 rounded-full animate-pulse hidden lg:block"></div>
      
      {/* Custom animation for floating elements */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;