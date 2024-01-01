import React from "react";
import backgroundImage from "../../Assets/Icons/bg.svg";

function HowItWorkSection() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center p-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg bg-white p-20 flex flex-col gap-28 xs:w-10/12 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-around gap-10">
          <div className="w-full text-6xl font-bold">How it Works ?</div>
          <div>
            Discovering essential medical products at your local pharmacies is a
            seamless experience with our platform, allowing users to
            effortlessly locate products in nearby pharmacies.
          </div>
        </div>
        <div className="flex justify-between items-center gap-7">
          <div className="text-2xl font-bold">
            Unlock Convenience and Confidence
          </div>
          <div className="text-gray-400">Explore The Library</div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="text-xl text-main-400 font-mina_bold">Search with Precision</div>
            <div>
              Begin by entering the name or category of the medical product you
              need in our user-friendly search bar.
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="text-xl text-main-400 font-mina_bold">Locate Nearby Pharmacies</div>
            <div>
            We analyze your location or let you manually input it to find pharmacies near you.
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="text-xl text-main-400 font-mina_bold ">Explore Product Availability</div>
            <div>
            Instantly access a list of local pharmacies that stock the product you're searching for.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorkSection;
