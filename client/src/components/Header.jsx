import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <div>
      <div className="bg-[rgb(60,216,112)] flex flex-row items-center justify-between px-24  text-white pt-6 pb-10 h-[123px]">
        <div className="flex flex-row items-center">
          <img src={Logo} />
          <p className="font-medium text-5xl ml-2 font-sans">Start</p>
        </div>

        <div className="flex flex-row space-x-6 px-16 font-sans text-2xl">
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
      </div>
    </div>
  );
}
