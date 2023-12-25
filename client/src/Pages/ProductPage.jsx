import React, {useState, useEffect} from 'react'
import Navbar from "../Components/ui/Navbar";
import { useParams } from 'react-router-dom';
import FooterBottom from '../Components/ui/FooterBottom';
import ReactPaginate from 'react-paginate';
import api from '../Api/api';
import PharmacyCard from "../Components/cards/PharmacyCard";
import ProductCard from '../Components/cards/ProductCard';

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [pharmaciesPagination, setPharmaciesPagination] = useState();
  

  useEffect(() => {
    getPharmaciesData(id, 1);
    getMedicineData(id);
  }, [])

  const getMedicineData = async (id) => {
    const endPoint = `medicine/${id}`;
    const response = await api.get(endPoint);
    setProduct(response.data.data);
  }

  const getPharmaciesData = async (id, pageNumber = 1) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const endPoint = `medicine/${id}/pharmacies?page=${pageNumber}`;
    const response = await api.get(endPoint);
    setPharmaciesPagination(response.data.data);
  }

  return (
    <>
    <Navbar />
    <div className='m-6'>
    <ProductCard key={product.id} product={product} isVertical={false}/>
    <div className='mt-8'>
        <h1 className="font-bold text-lg">Pharmacies</h1>
        <hr className="bg-secondary w-full h-1 mt-2"/>
    </div>
    <div className='mt-5'>
          {pharmaciesPagination && pharmaciesPagination.data.map((pharmacy) => {
              return (<div className='mt-2' key={pharmacy.id}><PharmacyCard key={pharmacy.id} pharmacy={pharmacy} /></div>);
            })}
    </div>
    
     {/*pagination design*/}
     <div className='mb-5'>
          {
            (pharmaciesPagination && pharmaciesPagination.total > 3) &&
            <ReactPaginate
              forcePage={pharmaciesPagination.current_page - 1}
              pageCount={Math.ceil(pharmaciesPagination.total / pharmaciesPagination.per_page)}
              itemsPerPage={pharmaciesPagination.per_page}
              onPageChange={(pageNumber) => getPharmaciesData(pageNumber.selected + 1)}
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
    <FooterBottom/>
    </>
  )
}

export default ProductPage;  