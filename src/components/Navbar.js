import React, {useState} from "react";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav , setNav] = useState(false);
  return (
    <div className="max-w-[1540px] mx-auto flex justify-between items-center p-4">
      {/* left Side */}
      <div className="flex items-center ">
        <div className="cursor-pointer">
          <GoThreeBars size={30} onClick={() => setNav(!nav)}/>
        </div>
        <h1 className="text-2xl lg:text-4xl sm:text-2xl px-2">
          Best <span className="font-bold">Deals</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex justify-center items-center px-2 w-[200px] sm:w-[400px] lg:w-[700px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent focus:outline-none p-2 w-full"
        />
      </div>
      {/* cart button */}
      <div className="bg-black text-white rounded-full flex justify-center items-center px-4 py-2">
        <BsCartFill size={22} />
        <p className="ml-1">Cart</p>
      </div>
      {/* Mobile Menu */}
      {/*Overlay */}
      {nav && <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0"></div>}

      {/* Side Drawer */}

      <div className={nav ? "fixed top-0 left-0 w-[300px] bg-white z-10 h-screen duration-500 px-3" : "fixed top-0 left-[-100%] w-[300px] bg-white z-10 h-screen duration-500 px-3 "}>
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-3xl py-3">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="mt-4">
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <TbTruckDelivery size={30} className="mr-4" />
              <p>Orders</p>
            </li>
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <MdFavorite size={25} className="mr-4" />
              <p>Favorites</p>
            </li>
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <MdHelp size={25} className="mr-4" />
              <p>Help</p>
            </li>
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <AiFillTag size={25} className="mr-4" />
              <p>Promotions</p>
            </li>
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <BsFillSaveFill size={25} className="mr-4" />
              <p>Best Ones</p>
            </li>
            <li className='flex items-center text-xl py-2 cursor-pointer hover:translate-x-2 transition ease-in-out duration-100'>
              <FaUserFriends size={25} className="mr-4" />
              <p>Invite Friends</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
