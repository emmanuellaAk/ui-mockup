import React from "react";
import '../App.css'
import Header from "../components/Header";
import Check from "../assets/check-lg.png";
import Footer from "../components/Footer";

export default function Services() {
  // Data for the cards
  const plans = [
    {
      name: "Basic",
      price: "$100",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
      features: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit"],
    },
    {
      name: "Plus",
      price: "$250",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
      features: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit"],
    },
    {
      name: "Pro",
      price: "$400",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
      features: ["Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit", "Lorem ipsum, dolor sit"],
    }
  ];

  return (
    <div>
      <Header />
      <div>
        <p className="text-center text-xl font-sans font-bold text-[rgb(60,216,112)] mt-8">
          P L A N S
        </p>
        <p className="text-4xl text-black font-crimson text-center font-bold text mt-4">
          Our Services
        </p>
        <p className="text-center font-sans text-xl text-black mt-2">
          Lorem ipsum, dolor sit amet consectetur
          <br />
          adipisicing elit.
        </p>
      </div>
      
      <div className="mt-8 md:px-28  grid md:grid-cols-3 md:gap-8 px-14 gap-14">
        {plans.map((plan, index) => (
          <div key={index} className="text-center rounded-lg py-12 shadow-custom">
            <div>
              <p className="font-sans font-medium">{plan.name}</p>
              <p className="font-bold text-4xl flex flex-row justify-center">
                {plan.price}
                <span className="font-medium text-base text-[rgb(128,128,128)] ml-2 self-center">
                  /month
                </span>
              </p>
              <p className="text-[rgb(128,128,128)] font-sans mt-2 px-4">
                {plan.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="leading-[2rem]">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex flex-row justify-center space-x-4 mt-4">
                  <img src={Check} alt="Check" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-lg text-xl mt-8">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

