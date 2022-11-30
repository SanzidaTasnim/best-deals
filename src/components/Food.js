import React, { useState } from "react";
import { categories } from "./../Data/data";
import FoodItem from "./FoodItem";

const Food = () => {
  const [category, setCategory] = useState(categories);
  return (
    <div className="max-w-[1540px] mx-auto py-4">
      <h1 className="text-center text-3xl md:text-5xl lg:md-text-5xl text-orange-700 font-bold">
        Top Rated Food Items
      </h1>
      <div className="grid md:grid-cols-4 gap-6 my-12 ">
         {
            category.map(item => {
               return (
                  <FoodItem item={item} key={item.id}/>
               )
            })
         }
      </div>
    </div>
  );
};

export default Food;
