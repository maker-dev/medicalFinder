import React from 'react'
import Navbar from '../Components/ui/Navbar';
import PharmacyCard from '../Components/cards/PharmacyCard';
import ResultBar from '../Components/ui/ResultBar';
import SideBarCard from '../Components/cards/SideBarCard';

function PharmacyPage() {
  return (
    <>
    <Navbar />
    <ResultBar/>
   
    <PharmacyCard imgUrl={null}/>
    <SideBarCard/>
    </>
    
  )
}

export default PharmacyPage