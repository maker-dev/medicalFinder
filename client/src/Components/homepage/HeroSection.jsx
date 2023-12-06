import React from "react";
import backgroundImage from "../../Assets/Icons/bg.svg";
import pillImage from "../../Assets/Icons/Pill.svg";
function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6" style={{ backgroundImage: `url(${backgroundImage})` }}  >
      <div className="flex flex-col md:w-1/2 items-center gap-3">
        <img className="mx-auto" src={pillImage} alt="Pill" />
        <div className="text-center font-mina_bold text-4xl md:text-5xl">
          Time-saving medicament discovery at your fingertips.
        </div>
        <div className="text-center text-2xl">
          Search once and locate in an instant.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-md px-4 mx-auto mt-12"
        >
        <div className="flex gap-4 justify-center items-center">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Type Pill, Pharmacy and more ..."
              name=""
              id=""
              className='w-full py-3 pl-12 pr-4 text-gray-700 border rounded-md outline-none bg-white focus:bg-white focus:border-main-400'
            />
          </div>
          <button className="bg-main-400 hover:bg-main-500 active:bg-main-600 w-16 h-11 flex items-center justify-center rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg></button>
        </div>
        </form>
        <div className="text-center">
          <span className="font-bold">ProTip!</span> Share insights about your
          health condition here.
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
