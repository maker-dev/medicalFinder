import React, {useState, useEffect} from 'react'
import Navbar from "../Components/ui/Navbar";
import { useParams } from 'react-router-dom';
import FooterBottom from '../Components/ui/FooterBottom';
import ReactPaginate from 'react-paginate';
import api from '../Api/api';
import PharmacyCard from "../Components/cards/PharmacyCard";
import ProductCard from '../Components/cards/ProductCard';
import { useAuth } from '../global/Auth';
import Disatnce from '../helpers/Distance';

function ProductPage() {
  const { id } = useParams();
  const {coordinates} = useAuth();
  const [product, setProduct] = useState({});
  const [pharmaciesPagination, setPharmaciesPagination] = useState();
  const coord1 = { lat: 37.7749, lon: -122.4194 };  // User coordinates
  

  useEffect(() => {
    getPharmaciesData(id, coordinates.latitude, coordinates.longitude, 1);
    getMedicineData(id);
  }, [])

  const getMedicineData = async (id) => {
    const endPoint = `medicine/${id}`;
    const response = await api.get(endPoint);
    setProduct(response.data.data);
  }

  const getPharmaciesData = async (id, $latitude, $longitude, pageNumber = 1) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const endPoint = `medicine/${id}/pharmacies?page=${pageNumber}&user_latitude=${$latitude}&user_longitude=${$longitude}`;
    const response = await api.get(endPoint);
    setPharmaciesPagination(response.data.data);
  }

  return (
    <>
    <Navbar />
    <div className='m-6'>
      <div className='md:max-w-5xl w-full mx-auto'>
        <ProductCard key={product.id} product={product} isVertical={false}/>
      </div>
    
    <div className='mt-8'>
        <h1 className="font-bold text-lg">Pharmacies</h1>
        <hr className="bg-secondary w-full h-1 mt-2"/>
    </div>
    {pharmaciesPagination && pharmaciesPagination.data.length > 0 ? (
        pharmaciesPagination.data.map((pharmacy) => (
      <div className='mt-2' key={pharmacy.id}>
        <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} distance={Disatnce(coord1,{ lat: pharmacy.location.latitude, lon: pharmacy.location.latitude })}/>
      </div>
    ))
  ) : (
    <div className='font-black text-xl  mt-6 mb-20'>No pharmacies found</div>
  )}
    
     {/*pagination design*/}
     <div className='mb-5'>
          {
            (pharmaciesPagination && pharmaciesPagination.total > 3) &&
            <ReactPaginate
              forcePage={pharmaciesPagination.current_page - 1}
              pageCount={Math.ceil(pharmaciesPagination.total / pharmaciesPagination.per_page)}
              itemsPerPage={pharmaciesPagination.per_page}
              onPageChange={(pageNumber) => getPharmaciesData(id,coordinates.latitude, coordinates.longitude, pageNumber.selected + 1)}
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