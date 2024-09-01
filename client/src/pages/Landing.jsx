import '../App.css'
import React from "react";
import Header from "../components/Header";
import People from "../assets/Group.svg";
import Facebook from "../assets/Vector.png";
import Microsoft from "../assets/Microsoft.svg";
import Google from "../assets/Google.svg";
import Airbnb from "../assets/Airbnb.png";
import Spotify from "../assets/Spotify.svg";
import People2 from "../assets/People.svg";
import People3 from "../assets/People 3.png";
import Person1 from "../assets/Person1.png";
import Footer from "../components/Footer";
export default function Landing() {
  
    const teamMembers = [
      { name: "Peg Legge", role: "CEO", image: Person1 },
      { name: "John Doe", role: "CTO", image: Person1 },
      { name: "Jane Smith", role: "CFO", image: Person1 },
      { name: "Richard Ferrera", role: "COO", image: Person1 }
    ];
 
  return (
    <div>
      <Header />
      <div className="flex flex-col-reverse md:flex-row  bg-[rgb(60,216,112)]  justify-evenly gap-16 md:px-16 pb-28 px-8">
        <div className="flex text-white font-poppins md:w-3/6 flex-col items-start gap-5 px-8 max-w-[600px]">
          <p>WELCOME</p>
          <p className="text-3xl md:text-4xl leading-[3rem]">
            Lorem ipsum dolor sit <br />
            amet consectetur
          </p>
          <p className="font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <button className="bg-white text-black px-16 py-3 rounded-lg text-xl">
            Explore
          </button>
        </div>
        <div className="flex-1 md:w-3/6">
          <img src={People} alt="" />
        </div>
      </div>
      <div className="mt-14 mb-14">
        <p className="text-center text-2xl font-sans font-bold text-[rgb(60,216,112)]">
          P A R T N E R S
        </p>
        <p className="text-black text-4xl text-center font-crimson font-bold mt-4">
          Lorem Ipsum Dolor
        </p>
        <p className="text-black text-2xl text-center font-sans font-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur <br />
          adipisicing elit.
        </p>
        <div className="mt-6 flex md:flex-row flex-col gap-10 items-center justify-between px-24">
          <img src={Google} alt="" />
          <img src={Microsoft} alt="" />
          <img src={Airbnb} alt="" />
          <img src={Facebook} alt="" />
          <img src={Spotify} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <button className=" bg-black text-white px-8 py-3 rounded-lg text-xl mt-8">
            Learn More
          </button>
        </div>
      </div>
      <div className="px-24 flex md:flex-row flex-col items-center justify-between mt-16 mb-16 gap-8">
        <div>
          <img src={People2} alt="" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <p className="text-3xl leading-[2rem] font-bold font-crimson">
            Lorem ipsum dolor sit <br /> amet consectetur{" "}
          </p>
          <p className="font-sans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br />
            error ipsum, voluptate culpa nesciunt delectus iste?
          </p>
          <button className=" bg-black text-white px-10 py-3 rounded-lg text-xl">
            Learn More
          </button>
        </div>
      </div>
      <div className="px-24 flex md:flex-row flex-col-reverse gap-8 items-center justify-between mt-16 mb-16">
        <div className="flex flex-col items-start gap-5">
          <p className="text-3xl md:text-4xl leading-[2rem] font-bold font-crimson">
            Lorem ipsum dolor sit <br /> amet consectetur{" "}
          </p>
          <p className="font-sans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br />{" "}
            error ipsum, voluptate culpa nesciunt delectus iste?
          </p>
          <button className=" bg-black text-white py-3 rounded-lg text-xl px-10">
            Learn More
          </button>
        </div>
        <div>
          <img src={People3} alt="" />
        </div>
      </div>
      <div className="mt-16 mb-14 text-center">
        <p className="text-2xl font-sans font-bold text-[rgb(60,216,112)]">
          T E A M
        </p>
        <p className="text-5xl leading-[3rem] font-bold font-crimson mt-6">
          Our Talents
        </p>
        <p className="font-sans mt-4 text-xl leading-[2rem]">
          Lorem ipsum, dolor sit amet consectetur <br />
          Suscipit nemo hic quos, ab,
        </p>

        <div className="mt-4 px-24 flex md:flex-row  justify-center flex-col gap-10 md:gap-3 md:px-24">
          {teamMembers.map((member, index) => (
            <div key={index} className=" mx-auto border-2 min-h-[13rem] shadow-xl flex  flex-col gap-3 px-2 min-w-[270px] max-w-[300px]">
              <div className="bg-white border-2 border-black rounded-[50%] mt-4 w-[180px] h-[180px] mx-auto">
                <img className="w-full h-full" src={member.image} alt={member.name} />
              </div>
              <div>
                <div className="py-3 w-full flex flex-col items-start pl-2">
                  <p className="text-2xl font-bold font-crimson">{member.name}</p>
                  <p className="text-lg text-slate-500 mr-16 mt-3 font-sans">
                    {member.role}
                  </p>
                </div> 
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className=" bg-black text-white px-8 py-3 rounded-lg text-xl mt-8">
            View Team
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
