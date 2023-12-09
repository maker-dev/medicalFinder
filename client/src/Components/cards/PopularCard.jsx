import React from "react";

function PopularCard() {
  return (
    <div className="flex h-128 bg-main-400 flex-col gap-7 max-w-sm rounded-md overflow-hidden shadow-lg p-10 justify-center items-center">
        <div className="text-5xl text-center">Most Popular Products</div>
        <button className=" text-center px-5 py-2 rounded-md bg-secondary text-white font-mina_bold">Show more +</button>
    </div>
  );
}

export default PopularCard;
