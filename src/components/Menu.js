import React, { useState } from "react";
import { data } from "./../Data/data";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [food, setFood] = useState(data);

  const filterByCategory = (category) => {
    const filtered = data.filter(item => item.category.toLowerCase() === category.toLowerCase())
    setFood(filtered)
  }

  const filterByPrice = (price) => {
    const filtered = data.filter(item => item.price === price)
    setFood(filtered)
  }

  return (
    <div className="max-w-[1540px] m-auto py-14 p-4">
      <h1 className="text-center text-3xl md:text-5xl lg:md-text-5xl text-orange-700 font-bold">
        Top Rated Menu Items
      </h1>
      <div className="grid md:grid-cols-2 my-7">
        <div>
          <h4 className="font-bold text-xl text-black/80 mb-5 flex">
            Filter Type
          </h4>
          <div>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold  hover:text-white hover:bg-orange-700 duration-300" onClick={() => setFood(data)}>
              All
            </button>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByCategory('burger')}>
              Burgers
            </button>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByCategory('pizza')}>
              Pizza
            </button>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByCategory('salad')}>
              Salads
            </button>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByCategory('chicken')}>
              Chicken
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl text-black/80 mb-5">Filter Price</h4>
          <div>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByPrice('$')}>
              $
            </button>
            <button className="mr-10 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByPrice('$$')}>
              $$
            </button>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByPrice('$$$')}>
              $$$
            </button>
            <button className="mr-14 md:mr-10 sm:mr-4 xs:mr-4 lg:mr-14 border-orange-700 text-orange-700 font-bold hover:text-white hover:bg-orange-700 duration-300" onClick={() => filterByPrice('$$$$')}>
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 my-12 ">
         {
            food.map(item => {
               return (
                  <MenuItem item={item} key={item.id}/>
               )
            })
         }
      </div>
    </div>
  );
};

export default Menu;
