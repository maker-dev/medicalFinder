import React from 'react'
import backgroundImage from "../../Assets/Icons/bg.svg";

function HowItWorkSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6" style={{ backgroundImage: `url(${backgroundImage})` }} >
        <div className='bg-white px-7 py-4'>
            <div className='flex items-center gap-10'>
                <div className='w-full text-4xl '>How it Works ?</div>
                <div>Discovering essential medical products at your local pharmacies is a seamless experience with our platform, allowing users to effortlessly locate products in nearby pharmacies.</div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorkSection