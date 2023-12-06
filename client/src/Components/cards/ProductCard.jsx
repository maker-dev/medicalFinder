import React from "react";


function ProductCard({ product }) {
  return (
    <>
    <div className="mb-5"></div>
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-7">
    <div>
      {product.new ? <span className=" mx-4 bg-main-400 rounded-lg text-white px-4 py-1 relative top-4">New</span> 
      :
      <span className="text-white px-4 py-2 relative top-4"></span>}
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
