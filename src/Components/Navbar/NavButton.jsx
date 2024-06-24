import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

const NavButton = ({value}) => {

    const [click,setClick] =useState(1)
   
  return (
    <div className='flex gap-[20px] items-center ml-[395px]'>
 
    <button onClick={()=>setClick(1)} className={` border-[#f2f0f0c3] border-[1px] font-semibold  h-[40px] w-[120px] text-[13px] rounded-[50px] flex justify-center items-center gap-[5px] ${click === 1 ? 'bg-[#eed4c5e2] text-[#ff5e00f9]' :'bg-[#ffffffc3] text-[#818080ca]' } `}>Configuration <FaAngleDown/> </button>
    <button onClick={()=>setClick(2)} className={` border-[#f2f0f0c3] border-[1px] font-semibold  h-[40px] w-[120px] text-[13px] rounded-[50px] flex justify-center items-center ${click === 2 ? 'bg-[#eed4c5e2] text-[#ff5e00f9]' :'bg-[#ffffffc3] text-[#818080ca]' } `}>Employee List</button>
    <button onClick={()=>setClick(3)} className={` border-[#f2f0f0c3] border-[1px] font-semibold  h-[40px] w-[120px] text-[13px] rounded-[50px] flex justify-center items-center ${click === 3 ? 'bg-[#eed4c5e2] text-[#ff5e00f9]' :'bg-[#ffffffc3] text-[#818080ca]' } ` }>Add Employee</button>
    <button onClick={()=>setClick(4)} className={` border-[#f2f0f0c3] border-[1px] font-semibold  h-[40px] w-[120px] text-[13px] rounded-[50px] flex justify-center items-center ${click === 4 ? 'bg-[#eed4c5e2] text-[#ff5e00f9]' :'bg-[#ffffffc3] text-[#818080ca]' } ` }>Reports</button>
  
   </div>
  )
}

export default NavButton