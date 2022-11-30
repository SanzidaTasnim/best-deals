import React from "react";

const HeadlineItem = ({ data }) => {
  const { item, time, img } = data;
  return (
    <div className='relative rounded-xl md:hover:scale-105 duration-300'>
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
        <p className='font-bold text-2xl px-2 pt-4'>{item}</p>
        <p className='px-2'>{time}</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img src={img} alt="items" className='max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl'/>
    </div>
  );
};

export default HeadlineItem;
