import React from 'react';

const FoodItem = ({item}) => {
   const {name, image} = item;
   return (
      <div className='flex bg-slate-200 rounded-xl justify-between items-center m-3 p-5'>
         <h3 className='text-xl font-bold'>{name}</h3>
         <img src={image} alt="food item" className='w-[100px]'/>
      </div>
   );
};

export default FoodItem;