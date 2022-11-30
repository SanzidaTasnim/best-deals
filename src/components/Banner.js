import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1540px] mx-auto">
      <div className="relative max-h-[600px]">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/40 flex justify-start items-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
            <br />
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1611077854917-291673c6ae06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          className="w-full max-h-[600px] object-cover"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
