import React from "react";
import aIcons from "../../Assets/Icons";
import CategorieCard from "../ui/CategorieCard";
import ProductCard from "../ui/ProductCard";


function CategoriesSection() {
  const categories = [
    { name: "Pain Relief", imgUrl: aIcons.painIc },
    { name: "Cold and Flu Remedies", imgUrl: aIcons.winterIc },
    { name: "First Aid Essentials", imgUrl: aIcons.aidIc },
    { name: "Allergy Relief", imgUrl: aIcons.shieldIc },
    { name: "Skin Care", imgUrl: aIcons.cleanIc },
    { name: "Vitamins and Supplements", imgUrl: aIcons.pillsIc },
  ];
  const products = [
    {
      new: true,
      title: "Aspirin",
      imgUrl: aIcons.prodIc_1,
      description:
        "Used for pain relief, fever reduction, and anti-inflammatory purposes.",
    },
    {
      new: false,
      title: "Acetaminophen (Tylenol)",
      imgUrl: aIcons.prodIc_2,
      description: "Commonly used for pain relief and reducing fever.",
    },
  ];
  return (
    <div className="bg-white flex flex-col items-center h-screen">
      <div className="p-10 flex flex-col items-center">
        <div className="font-mina_bold text-3xl">Featured Categories</div>
        <div className="text-center">
          Explore our curated collection of featured categories, each tailored
          to meet your specific health needs.
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-2 md:flex md:gap-5 ">
        {categories.map((category, index) => {
          return <CategorieCard key={index} category={category} />;
        })}
      </div>
      <div className="p-10 flex flex-col items-center">
        <div className="font-mina_bold text-3xl">Popular Products</div>
        <div className="text-center">
          Discover our Popular Products – a curated selection of frequently
          sought-after medicaments that have earned the trust of our community.
        </div>
      </div>
      <div>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product}/>;
        })}
      </div>
    </div>
  );
}

export default CategoriesSection;
