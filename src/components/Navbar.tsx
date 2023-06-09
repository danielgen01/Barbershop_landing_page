import React from "react";
import logo from "../../assets/images/logo.png"
import {BiShoppingBag} from "react-icons/bi"
import {HiMenuAlt3} from "react-icons/hi"


const Navbar:React.FC = () => {
  return (
    
    <nav className="flex justify-between items-center h-40 mx-10 text-2xl">
        <img src={logo} alt="logo" className=""/>

        <div className="links text-white  items-center gap-5 font-medium text-md hidden xl:flex">
            <a href="#" className="hover:text-barberColor duration-200 uppercase text-barberColor">the home</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">services and prices</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">acedemy</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">franchise</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">our team</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">contact</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">portfolio</a>
            <a href="#" className="hover:text-barberColor duration-200 uppercase">shop</a>


        </div>

        <div className="cart flex items-center">
            <BiShoppingBag className="text-4xl text-white"/>
            <p className="bg-barberColor px-2 text-sm rounded-full text-white font-semibold -ml-5 -mt-5">0</p>
        </div>
        <HiMenuAlt3 className="text-gray-300 text-5xl xl:hidden"/>
    </nav>
    
  )
};

export default Navbar;
