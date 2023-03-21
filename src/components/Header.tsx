import React from "react";
import {GrLocation} from "react-icons/gr"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {IoIosCall} from "react-icons/io"

const Header:React.FC = () => {
  return (
    <>
    <div className="Header bg-black h-10 flex justify-end items-center gap-5">
        <div className="div flex">
        <HiOutlineLocationMarker className="text-barberColor text-xl "/>
        <h1 className="text-white">32609 Löhne</h1>
        </div>
        <div className="call flex items-center">
            <IoIosCall className="text-barberColor text-xl"/>
            <h1 className="text-white">0124345125412</h1>
        </div>
    </div>
    </>
  )
};

export default Header;
