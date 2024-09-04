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
      <div className="bg-orange-400 md:grid md:grid-cols-2 flex flex-col-reverse md:px-24 px-12 items-center justify-between mt-16 gap-5">
  <form action="" className="bg-red-600 p-4 grid grid-cols-1 gap-4">
    <div>
      <label className="font-bold block">Name</label>
      <input type="text" className="h-8 border-2 w-full " />
    </div>
    <div>
      <label className="font-bold block">Email</label>
      <input type="email" className="h-8 w-full border-2" />
    </div>
    <div>
      <label className="font-bold block">Message</label>
      <textarea className="h-20 w-full border-2"></textarea>
    </div>
    <button className="bg-black text-white py-3 w-full text-xl">Submit</button>
  </form>

  <div className="flex justify-center items-center">
    <img src={Map} alt="" className="max-w-full h-auto" />
  </div>
</div>
      <Footer />
    </div>
  );
}
