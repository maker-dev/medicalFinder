import React from "react";
import bell_off from '../../Assets/Icons/bell_off.svg';
// import bell_on from '../../Assets/Icons/bell_on.svg';
import  MedicineImg from '../../Assets/Icons/MedicineImg.svg';

function ProductCard({ product }) {
  const created_at = new Date(product.created_at);
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
  const currentDate = new Date();
  
  var isNew;

  if (currentDate - created_at < oneWeekInMilliseconds) isNew = true
  else isNew = false;

  return (
    <>
  <div className="bg-white max-w-sm h-128 rounded-md overflow-hidden shadow-lg p-5">
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
  </div>
    </>
  );
}

export default ProductCard;
