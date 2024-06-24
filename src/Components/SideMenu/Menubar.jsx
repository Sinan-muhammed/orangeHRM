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
  const [hide, setHide] = useState(false);
  return (
    <div className="relative z-[999]">
      <div
        className={`${
          hide === true
            ? "translate-x-[-90px]  transition-transform duration-500 ease-in-out "
            : "translate-x-[0px] menu h-[100vh] w-[full] shadow-lg shadow-[#24292E] transform transition-transform duration-500 ease-in-out rounded-br-[45px] rounded-tr-[45px]"
        }`}
      >
        <div className="h-[10%] w-[100%] bg-slate-50 rounded-tr-[45px] flex items-center justify-center pt-[30px]">
            <img src="../../../public/orangeHrm.png" alt="" className="w-[250px]"/>
        </div>
        <div className="h-[12%] w-[100%] bg-white flex items-end  border-b pb-4">
             <div className=" flex gap-[15px] items-center  ml-[55px]">
                <LuSearch className="rotate-90 font-bold text-[25px] text-[#7F97B7]"/>
                <h1 className="font-bold mt-[3px] text-[18px] text-[#7F97B7]"> Search</h1>
             </div>
        </div>
        <div className="h-[80%] w-[100%] bg-slate-50 rounded-br-[45px] pt-[24px]">
            <div className="flex items-center gap-[15px]  ml-[55px]">
               <BsPersonLinesFill className="text-[25px] text-[#7F97B7] font-bold "/>
               <h1 className="font-bold text-[#7F97B7]">Admin</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <MdGroups className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">PIM</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <FcLeave className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">Leave</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <MdAccessTime className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">Time</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <GrContactInfo className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">My Info</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <GoHome className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">Dashboard</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <TbAddressBook className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">Directory</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <TbSettingsCog className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">Maintenance</h1>
            </div>
            <div className="flex items-center gap-[15px]  ml-[55px]">
                <TbMessages className="text-[25px] text-[#7F97B7] font-bold "/>
                <h1 className="font-bold text-[#7F97B7]">Buzz</h1>
            </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => setHide((prev) => !prev)}
          className={`flex text-[15px] font-semibold text-white h-[30px] w-[30px] bg-orange-600 items-center justify-center absolute   rounded-full ${
            hide === false
              ? "right-[-14px] top-[132px]"
              : "left-[15px] top-[130px] rotate-180"
          }`}
        >
          <FaChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default Menubar;
