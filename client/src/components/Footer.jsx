import React from 'react'
import Facebook from "../assets/Facebook2.svg";
import Google from "../assets/Google2.svg";
import Twitter from "../assets/Twitter.svg";
import Pinterest from "../assets/Pinterest.svg";
import Tiktok from "../assets/Tiktok.svg";
import Whatsapp from "../assets/Whatsapp.svg";
import Youtube from "../assets/Youtube.svg";
export default function Footer() {
 
  return (
    <div className='bg-[rgb(60,216,112)] flex flex-row items-center justify-between px-24 h-[125px] mt-16'>
      <div className='flex flex-row items-center space-x-4'>
        <img src={Facebook} alt="" />
        <img src={Google} alt="" />
        <img src={Twitter} alt="" />
        <img src={Pinterest} alt="" />
        <img src={Tiktok} alt="" />
        <img src={Whatsapp} alt="" />
        <img src={Youtube} alt="" />
      </div>
      <div className='text-white text-xl '>
        <p>© Start, 2022. All rights reserved.</p>
      </div>
    </div>
  )
}
