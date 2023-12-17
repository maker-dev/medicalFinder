import React, { useEffect, useState } from "react";
import Navbar from "../Components/ui/Navbar";
import PharmacyCard from "../Components/cards/PharmacyCard";
import ResultBar from "../Components/ui/ResultBar";
import SideBarCard from "../Components/cards/SideBarCard";
import FooterBottom from "../Components/ui/FooterBottom";
import SubscribeBar from "../Components/ui/SubscribeBar";
import PopularCard from "../Components/cards/PopularCard";
import api from '../Api/api';
import ReactPaginate from 'react-paginate';


function ListPharmacyPage() {

  const [pharmaciesPagination, setPharmaciesPagination] = useState();

  useEffect(() => {
    getPharmaciesData();
  }, [])

  const getPharmaciesData = async (pageNumber = 1) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const endPoint = `pharmacies?page=${pageNumber}`;
    const response = await api.get(endPoint);
    setPharmaciesPagination(response.data.data);
  }


  return (
    <>
      <Navbar />
      <div className="mx-8 my-4">
        <ResultBar results={pharmaciesPagination && pharmaciesPagination.total}/>
        <div className="  my-4 gap-4 grid   grid-cols-12">
          <div className="lg:col-start-1 lg:col-span-3 col-span-12 flex flex-col items-center gap-5 ">
            <SideBarCard />
            <PopularCard text={"GET DAILY UPDATE"} button={"SUBSCRIBE"} />
          </div>
          <div className="  col-span-12  lg:col-span-9 flex flex-col gap-4 ">
            <SubscribeBar />
            
            {pharmaciesPagination && pharmaciesPagination.data.map((pharmacy) => {
              return <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />;
            })}

            {/*"pagination design"*/}
            <div className='mb-5'>
          {
            pharmaciesPagination &&
            <ReactPaginate
              forcePage={pharmaciesPagination.current_page - 1}
              pageCount={Math.ceil(pharmaciesPagination.total / pharmaciesPagination.per_page)}
              itemsPerPage={pharmaciesPagination.per_page}
              onPageChange={(pageNumber) => getPharmaciesData(pageNumber.selected + 1)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              containerClassName="flex justify-center mt-8"
              pageClassName="mx-2 px-3 py-2  hover:text-main-400 transition-colors duration-300"
              activeClassName="text-main-400 "
              breakClassName="mx-2 px-3 py-2 bg-gray-300  "
              breakLinkClassName="text-main-400"
              previousLabel="<"
              nextLabel=">"
              previousClassName="mx-2 px-3 py-2   hover:text-main-400 text-lg font-black transition-colors duration-300"
              nextClassName="mx-2 px-3 py-2   hover:text-main-400 text-lg font-black transition-colors duration-300"
          />
          }
          </div>
          </div>
        </div>
      </div>

      <FooterBottom/>
    </>
  );
}

export default ListPharmacyPage;
