import React from 'react';

const MenuItem = ({item}) => {
   const {name , price , image} = item;
   return (
      <div className='max-h-[420px] shadow-2xl rounded-b-lg hover:scale-105 duration-300 cursor-pointer'>
         <div>
            <img className='h-[220px] w-full object-cover rounded-t-xl' src={image} alt="food" />
         </div>
         <div className='grid grid-cols-2 my-4 px-3'>
            <h5 className='font-bold text-md'>{name}</h5>
            <p className='px-3 text-center rounded-2xl bg-orange-500 w-[60px] text-white ml-auto'>{price}</p>
         </div>
      </div>
   );
};

export default MenuItem;