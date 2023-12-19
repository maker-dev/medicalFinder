import React, { useEffect, useState } from 'react'
import Navbar from "../Components/ui/Navbar";
import ResultBar from '../Components/ui/ResultBar';
import SideBarCard from '../Components/cards/SideBarCard';
import PopularCard from '../Components/cards/PopularCard';
import SubscribeBar from '../Components/ui/SubscribeBar';
import FooterBottom from '../Components/ui/FooterBottom';
import ProductCard from '../Components/cards/ProductCard';
import api from '../Api/api';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';

function ListProductPage() {
  const location = useLocation();
  const [medicinesPagination, setMedicinesPagination] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (location.state) {
      setSearch(location.state);
      getMedicinesData(1, location.state);
    } else {
      getMedicinesData();
    }
  }, [])


  const onSearchClick = (e) => {
    e.preventDefault();
    getMedicinesData(1, search);
  }

  const getMedicinesData = async (pageNumber = 1, search="") => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const endPoint = `medicines?page=${pageNumber}&search=${search}`;
    const response = await api.get(endPoint);
    setMedicinesPagination(response.data.data);
  }

  return (
    <>
    <Navbar />
    <div className="mx-8 my-4">
      <ResultBar results={medicinesPagination && medicinesPagination.total}/>
      <div className="  my-4 gap-4 grid grid-cols-12">
        <div className="lg:col-start-1 lg:col-span-3 col-span-12 flex flex-col items-center gap-5 ">
          <SideBarCard search={search} setSearch={setSearch} onSearchClick={onSearchClick}/>
          <PopularCard text={"GET DAILY UPDATE"} button={"SUBSCRIBE"} />
        </div>
        <div className="  col-span-12  lg:col-span-9 flex flex-col gap-4  items-center">
          <SubscribeBar />
          <div className='grid md:grid-cols-2 items-center justify-center gap-12'>
          {medicinesPagination && medicinesPagination.data.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
          </div>

          {/*"pagination design"*/}
          <div className='mb-5'>
          {
            (medicinesPagination && medicinesPagination.total > 6) &&
            <ReactPaginate
            forcePage={medicinesPagination.current_page - 1}
            pageCount={Math.ceil(medicinesPagination.total / medicinesPagination.per_page)}
            itemsPerPage={medicinesPagination.per_page}
            onPageChange={(pageNumber) => getMedicinesData(pageNumber.selected + 1)}
            pageRangeDisplayed={3}
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

    <FooterBottom />
  </>
  )
}

export default ListProductPage