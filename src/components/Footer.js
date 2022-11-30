import React from "react";
import {BsFacebook, BsPinterest} from 'react-icons/bs';
import {AiFillInstagram , AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="max-w-[1540px] mx-auto p-4 bg-slate-700 text-white">
      <div className="grid md:grid-cols-2 mb-16">
        <div>
          <h2 className="text-3xl my-7">
            Best <span className="font-bold font-serif">Deals</span>
          </h2>
          <ul className="flex text-xl font-serif justify-between">
            <li className="cursor-pointer">
              About Best <span className="font-bold">Deals</span>
            </li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Press</li>
            <li className="cursor-pointer">Customer Care</li>
            <li className="cursor-pointer">Food Service</li>
          </ul>
        </div>
        <div className="md:ml-[80px] mt-[45px]">
          <p className="text-xl font-serif mb-3">
            Get The Newest Best <span>Deals</span>News
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="px-4 py-3 w-[450px] bg-transparent outline-0 border-2 border-slate-500 rounded-lg"
            />
            <button className="w-[170px] ml-2 py-3 border-2 border-slate-500 bg-blue-800 font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex my-5 font-mono">
          <p className="mr-3">Terms &amp; Conditions |</p>
          <p className="mr-3">Privacy Policy |</p>
          <p className="mr-3">CA Transparency in Supply Chains Act |</p>
          <p className="mr-3">Cookie Consent</p>
        </div>
      </div>
      <div className="flex justify-between text-md mb-2 font-mono">
        <div>
          <p>
            &copy;{new Date().getFullYear()} Best{" "}
            <span>Deals,LLC.All Rights Reserved.</span>
          </p>
        </div>
        <div className='flex'>
          <BsFacebook size={25} className='mx-3 cursor-pointer'/>
          <AiFillInstagram size={25} className='mx-3 cursor-pointer'/>
          <AiFillYoutube size={25} className='mx-3 cursor-pointer'/>
          <AiFillTwitterCircle size={25}  className='mx-3 cursor-pointer'/>
          <BsPinterest size={25} className='mx-3 cursor-pointer'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
