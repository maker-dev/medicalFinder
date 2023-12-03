import React from 'react'
import backgroundImage from '../../Assets/bg.svg'
function HeroSection() {
  return (
    <div className='bg-repeat bg-center w-full h-screen' style={{backgroundImage:`url(${backgroundImage})`}}>
      <div className='flex'>
        <img src='' alt='Pill Image'/>
        <div className='font-medium'>Time-saving medicament discovery at your fingertips.</div>
        <div>Search once and locate in an instant.</div>
      </div>
    </div>
  )
}

export default HeroSection