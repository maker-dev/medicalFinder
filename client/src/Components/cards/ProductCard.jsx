import React from "react";
import bell_off from '../../Assets/Icons/bell_off.svg';
// import bell_on from '../../Assets/Icons/bell_on.svg';
import  MedicineImg from '../../Assets/Icons/MedicineImg.svg';
import IsProductNew from '../../helpers/IsProductNew';

function ProductCard({ product, onClick, isVertical }) {
  
  var isNew = IsProductNew(product.created_at, 7);
  


 
  return (
    <>
  {isVertical && <div className="bg-white max-w-sm h-128 rounded-md overflow-hidden shadow hover:shadow-xl p-5 cursor-pointer" onClick={onClick} >
    <div className="flex justify-between items-center">
      {isNew ? <div className="bg-main-400 rounded-lg text-white px-4 py-1 w-fit">New</div> 
      :
      <div className="text-white px-4 py-2"></div>}
      {
        <img src={bell_off} alt="product img" className="w-8 cursor-pointer" />
      }
    </div>
    <div className="flex justify-center p-4">
      <img className="w-2/3" src={product.image === null ? MedicineImg : MedicineImg} alt="Sunset in the mountains" />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">{product.title}</div>
      <p className="text-gray-700 text-base text-center">
        {product.description}
      </p>
    </div>
  </div>}
  {!isVertical && <div className="bg-white  max-w  rounded-md overflow-hidden shadow  p-5 " >
    <div className="flex justify-between items-center">
      {isNew ? <div className="bg-main-400 rounded-lg text-white px-4 py-1 w-fit">New</div> 
      :
      <div className="text-white px-4 py-2"></div>}
      {
        <img src={bell_off} alt="product img" className="w-8 cursor-pointer" />
      }
    </div>
    <div className='flex flex-col sm:flex-row  h-full mt-2 sm:justify-evently w-full sm:space-x-6 '>
  
    <img className=" w-full sm:w-1/3 sm:ml-8 sm:mb-2 md:mb-6 " src={product.image === null ? MedicineImg : MedicineImg} alt="Sunset in the mountains" />
    <div className=" mt-4 sm:mt-0  flex  flex-col  md:space-y-4">
      <div className="font-bold text-2xl md:text-3xl ">Title of the product</div>
      <div className='ml-2 flex flex-col sm:space-y-2'>
        <div className=''>
          <h2 className="font-bold text-md md:text-lg ">
            Categories
          </h2>
          <p className="text-gray-700 text-sm md:text-md"> uiuiy </p>
        </div>
        <div>
          <h2 className="font-bold text-md md:text-lg ">
            Composition
          </h2>
          <p className="text-gray-700 text-sm md:text-md"> uiuiy </p>
        </div>
        <div>
          <h2 className="font-bold text-md md:text-lg ">
            Costumer's Age
          </h2>
          <p className="text-gray-700 text-sm md:text-md"> uiuiy </p>
        </div>
      

      </div>
      
    </div>
    </div>
    
  </div>}
    </>
  );
}

export default ProductCard;


