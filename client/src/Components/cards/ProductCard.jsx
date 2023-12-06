import React from "react";
import bell_off from '../../Assets/Icons/bell_off.svg';
import bell_on from '../../Assets/Icons/bell_on.svg';

function ProductCard({ product }) {
  return (
    <>
  <div className="max-w-sm h-128 rounded-md overflow-hidden shadow-lg p-5">
    <div className="flex justify-between items-center">
      {product.new ? <div className="bg-main-400 rounded-lg text-white px-4 py-1 w-fit">New</div> 
      :
      <div className="text-white px-4 py-2"></div>}
      {
        product.notif ? <img src={bell_on} alt="product img" className="w-8 cursor-pointer" />
        :  <img src={bell_off} alt="product img" className="w-8 cursor-pointer" />
      }
    </div>
    <div className="flex justify-center p-4">
      <img className="w-2/3" src={product.imgUrl} alt="Sunset in the mountains" />
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
