import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Landing from "../assets/Landing.png";
import Web from "../assets/Web.png"; 

export default function Portfolio() {
  return (
    <div>
      <Header/>
      <div>
        <p className="text-center text-xl font-sans font-bold text-[rgb(60,216,112)] mt-8">
          W O R K S
        </p>
        <p className="text-4xl text-black font-crimson text-center font-bold text mt-4">
          Portfolio
        </p>
        <p className="text-center font-sans  text-xl text-black mt-4 ">
          Lorem ipsum, dolor sit amet consectetur
          <br />
          adipisicing elit.
        </p>
      </div>
      <div className="px-24 gap-9 grid grid-cols-2 mt-20 mb-8">
        <img className="border-black border-2" src={Landing} alt="" />
        <img className="border-black border-2" src={Web} alt="" />
        <img className="border-black border-2" src={Landing} alt="" />
        <img className="border-black border-2" src={Web} alt="" />
        <img className="border-black border-2" src={Landing} alt="" />
        <img className="border-black border-2" src={Web} alt="" />
        <img className="border-black border-2" src={Landing} alt="" />
        <img className="border-black border-2" src={Web} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <button className=" bg-black text-white px-8 py-3 rounded-lg text-xl mt-8">
          Learn More
        </button>
      </div>
      <Footer/>
    </div>
  );
}
