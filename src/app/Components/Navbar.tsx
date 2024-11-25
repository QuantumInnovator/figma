"use client";
import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 py-3 bg-white relative">
      {/* Static Logo */}
      <div className="mr-5">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={150} 
          height={150} 
          priority // Ensures the logo loads quickly
          layout="intrinsic" // Adjusts logo size to screen
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 justify-center ">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Courses</li>
        <li className="hover:text-blue-500 cursor-pointer">Service</li>
        <li className="hover:text-blue-500 cursor-pointer">Achievement</li>
        <li className="hover:text-blue-500 cursor-pointer">About Us</li>
        <li className="hover:text-blue-500 cursor-pointer md:mr-6">Testimonials</li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex gap-4 lg:gap-6">
        <button className="px-6 py-2 border-2 rounded-xl md:px-8">Login</button>
        <button className="px-6 py-2 border-2 rounded-xl text-white bg-black md:px-8">SignUp</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className="md:hidden flex flex-col cursor-pointer space-y-2 "
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="block w-8 h-1 bg-black"></span>
        <span className="block w-8 h-1 bg-black"></span>
        <span className="block w-8 h-1 bg-black"></span>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full max-w-sm mx-auto bg-white p-5 md:hidden z-50">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Courses</li>
            <li className="hover:text-blue-500 cursor-pointer">Service</li>
            <li className="hover:text-blue-500 cursor-pointer">Achievement</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button className="px-6 py-2 border-2 rounded-xl">Login</button>
            <button className="px-6 py-2 border-2 rounded-xl text-white bg-black">SignUp</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

