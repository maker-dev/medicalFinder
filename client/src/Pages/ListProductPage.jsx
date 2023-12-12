import React from 'react'
import Navbar from "../Components/ui/Navbar";
import ResultBar from '../Components/ui/ResultBar';
import SideBarCard from '../Components/cards/SideBarCard';
import PopularCard from '../Components/cards/PopularCard';
import SubscribeBar from '../Components/ui/SubscribeBar';
import { products } from '../data/data';
import Pagination from '../Components/ui/Pagination';
import FooterBottom from '../Components/ui/FooterBottom';
import ProductCard from '../Components/cards/ProductCard';


function ListProductPage() {
  return (
    <>
    <Navbar />
    <div className="mx-8 my-4">
      <ResultBar />
      <div className="  my-4 gap-4 grid grid-cols-12">
        <div className="lg:col-start-1 lg:col-span-3 col-span-12 flex flex-col items-center gap-5 ">
          <SideBarCard />
          <PopularCard text={"GET DAILY UPDATE"} button={"SUBSCRIBE"} />
        </div>
        <div className="  col-span-12  lg:col-span-9 flex flex-col gap-4  items-center">
          <SubscribeBar />
          <div className='grid md:grid-cols-2 items-center justify-center gap-12'>
          {products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
          </div>

          {/*"Paginaton design"*/}
          <Pagination />
        </div>
      </div>
    </div>

    <FooterBottom />
  </>
  )
}

export default ListProductPage