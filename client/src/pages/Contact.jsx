import React from "react";
import Header from "../components/Header";
import Map from "../assets/Map.png";
import Footer from "../components/Footer.jsx";
export default function Contact() {
  return (
    <div>
      <Header />
      <div>
        <p className="text-4xl text-black font-crimson text-center font-bold text mt-4">
          Contact Us
        </p>
        <p className="text-center font-sans  text-xl text-black mt-2 ">
          Lorem ipsum, dolor sit amet consectetur
          <br />
          adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-2 px-24 items-center justify-between mt-16 gap-5">
        <form action="" className="p-4 grid grid-cols-1 gap-4">
          <div>
            <label className="font-bold block">Name</label>
            <input type="text" className="h-8  border-2 w-full px-2" />
          </div>
          <div>
            <label className="font-bold block">Email</label>
            <input type="email" className="h-8 w-full  border-2 px-2" />
          </div>
          <div>
            <label className="font-bold block">Message</label>
            <textarea className="h-20 w-full border-2 px-2"></textarea>
          </div>
          <button className="bg-black text-white py-1 w-full ">Submit</button>
        </form>

        <div>
          <img src={Map} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
