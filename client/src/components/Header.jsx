import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Hamburger from '../assets/list.png'
export default function Header() {
  return (
    <div>
      <nav className="bg-[rgb(60,216,112)] flex flex-row items-center justify-between md:px-24 px-10  text-white py-6">
        <div className="flex flex-row items-center">
          <img src={Logo} className="w-[45px] md:w-[55px]"/>
          <p className="font-medium ml-2 font-sans text-3xl md:text-4xl">Start</p>
        </div>
       
        <div className="md:flex flex-row space-x-6 px-16 font-sans text-2xl hidden">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/portfolio">
            <p>Portfolio</p>
          </Link>
          <Link to="/services">
            <p>Services</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
         <img src={Hamburger} alt="" className="md:hidden " />
      </nav>
    </div>
  );
}
// 