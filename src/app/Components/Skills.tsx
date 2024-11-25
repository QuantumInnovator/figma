'use client';
import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white p-10 flex items-start justify-center flex-col text-left">
          <h2 className="font-bold text-3xl md:text-5xl mb-4">Learn new skills <br /> online with ease</h2>
          <p className="text-xs md:text-lg max-w-md mb-4">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            
          </p>
          
          {/* Button Container */}
          <div className="flex gap-4">
            {/* Styled Buttons */}
            <button className="px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition duration-200">
              Start learning now
            </button>
            <button className="px-6 py-2 text-black bg-slate-50 border-2 border-black rounded-lg hover:bg-slate-500 transition duration-200">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-10 flex items-center justify-center relative">
          <div className="relative w-full h-full">
            <Image 
              src="/img1.png" 
              alt="Learning Skills"
              layout="intrinsic" // Ensures the image maintains its aspect ratio across devices
              width={500} // Set a default width for responsiveness
              height={500} // Set a default height for responsiveness
              objectFit="contain" // Ensures the image is fully visible without being cut off
              objectPosition="center" // Keeps the image centered
              priority // Ensures the image is loaded early for better performance
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;


