import React from "react";
import image from '../../Assets/Icons/prod1.svg'

function ProductCard({ product }) {
  return (
    <>
    <div className="mb-5"></div>
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div>
      <span className="bg-main-400 rounded-lg text-white px-4 py-2 relative top-4">New</span>
    </div>
    <div className="flex justify-center p-4">
      <img className="w-2/3" src={image} alt="Sunset in the mountains" />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
  </div>
    </>
  );
}

export default ProductCard;
