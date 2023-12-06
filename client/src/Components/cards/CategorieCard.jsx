import React from "react";

function CategorieCard({ category }) {
  return (
    <div className="bg-black w-32 h-56 md:w-40 md:h-60 rounded-md p-2 md:p-5 flex flex-col items-center  justify-center gap-2">
      <img
        className="w-12 h-fit object-cover"
        src={category.imgUrl}
        alt={category.name + " img"}
      />
      <div className="text-center font-mina_bold text-white self-center">
        {category.name}
      </div>
    </div>
  );
}

export default CategorieCard;
