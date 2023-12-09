import React from "react";
import Navbar from "../Components/ui/Navbar";
import PharmacyCard from "../Components/cards/PharmacyCard";
import ResultBar from "../Components/ui/ResultBar";
import SideBarCard from "../Components/cards/SideBarCard";
import FooterBottom from "../Components/ui/FooterBottom";
import SubscribeBar from "../Components/ui/SubscribeBar";
import { pharmacies } from "../data/data";
import PopularCard from "../Components/cards/PopularCard";
import Pagination from "../Components/ui/Pagination";

function PharmacyPage() {
  return (
    <>
      <Navbar />
      <div className="mx-8 my-4">
        <ResultBar />
        <div className="  my-4 gap-4 grid   grid-cols-12">
          <div className="lg:col-start-1 lg:col-span-3 col-span-12 flex flex-col items-center gap-5 ">
            <SideBarCard />
            <PopularCard text={"GET DAILY UPDATE"} button={"SUBSCRIBE"} />
          </div>
          <div className="  col-span-12  lg:col-span-9 flex flex-col gap-4 ">
            <SubscribeBar />
            
            {pharmacies.map((pharmacy, index) => {
              return <PharmacyCard key={index} pharmacy={pharmacy} />;
            })}

            {/*"Paginaton design"*/}
            <Pagination />
          </div>
        </div>
      </div>

      <FooterBottom/>
    </>
  );
}

export default PharmacyPage;
