import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FcLeave } from "react-icons/fc"
import { MdAccessTime } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { TbAddressBook } from "react-icons/tb";
import { TbSettingsCog } from "react-icons/tb";
import { TbMessages } from "react-icons/tb";

const Menubar = () => {

   // State to toggle the visibility of the menu
  const [hide, setHide] = useState(false);

  // State to button click and set the active button
  const [onclick,setOnClick] = useState(1)

  return (
    <div className="relative z-[999]">
      <div
        className={`${
          hide === true
            ? "translate-x-[-350px]  transition-transform duration-1000 ease-in-out "
            : "translate-x-[0px] menu h-[100vh] w-[full] shadow-lg shadow-[#24292E] transform transition-transform duration-1000 ease-in-out rounded-br-[45px] rounded-tr-[45px]"
        }`}
      >
        {/* Logo section */}
        <div className="h-[10%] w-[100%] bg-slate-50 rounded-tr-[45px] flex items-center justify-center pt-[30px]">
            <img src="../../../public/orangeHrm.png" alt="" className="w-[250px]"/>
        </div>

        {/* Search section */}
        <div className="h-[12%] w-[100%] bg-white flex items-end  border-b pb-4">
             <div className=" flex gap-[15px] items-center  pl-[55px]">
                <LuSearch className="rotate-90 font-bold text-[25px] text-[#7F97B7]"/>
                <h1 className="font-bold mt-[3px] text-[18px] text-[#7F97B7]"> Search</h1>
             </div>
        </div>

        {/* Menu items */}
        <div className="h-[80%] w-[100%] bg-slate-50 rounded-br-[45px] pt-[24px] flex flex-col ">
            <div onClick={()=>setOnClick(1)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%]  rounded-r-[50px] ${onclick === 1 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
               <BsPersonLinesFill className="text-[25px]  font-bold "/>
               <h1 className="font-bold ">Admin</h1>
            </div>
            <div onClick={()=>setOnClick(2)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 2 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
                <MdGroups className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">PIM</h1>
            </div>
            <div onClick={()=>setOnClick(3)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 3 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
                <FcLeave className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">Leave</h1>
            </div>
            <div onClick={()=>setOnClick(4)} className={`flex items-center gap-[25px] cursor-pointer  pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 4 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
                <MdAccessTime className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">Time</h1>
            </div>
            <div onClick={()=>setOnClick(5)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 5 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
                <GrContactInfo className="text-[25px] font-bold "/>
                <h1 className="font-bold ">My Info</h1>
            </div>
            <div onClick={()=>setOnClick(6)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 6 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
                <GoHome className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">Dashboard</h1>
            </div>
            <div onClick={()=>setOnClick(7)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 7 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' } `}>
                <TbAddressBook className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">Directory</h1>
            </div>
            <div onClick={()=>setOnClick(8)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 8 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]' }`}>
                <TbSettingsCog className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">Maintenance</h1>
            </div>
            <div onClick={()=>setOnClick(9)} className={`flex items-center gap-[25px] cursor-pointer pl-[55px] h-[54px] w-[95%] rounded-r-[50px] ${onclick === 9 ? 'bg-gradient-to-r from-[#FB840C] to-[#F35C17] text-white' : 'bg-none text-[#7F97B7]'}`}>
                <TbMessages className="text-[25px]  font-bold "/>
                <h1 className="font-bold ">Buzz</h1>
            </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => setHide((prev) => !prev)}
          className={`flex text-[15px] font-semibold text-white h-[30px] w-[30px] bg-orange-600 items-center justify-center absolute  transform transition-transform duration-1000  rounded-full ${
            hide === false
              ? "right-[-14px] top-[132px]"
              : "left-[15px] top-[130px] rotate-180 "
          }`}
        >
          <FaChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default Menubar;
