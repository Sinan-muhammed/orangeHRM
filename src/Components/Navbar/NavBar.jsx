import React from 'react'
import NavButton from './NavButton'


const NavBar = () => {
         
  return (
    <>
      <div className='h-[150px] w-[100%] fixed'>
         <div className='h-[50%] w-[100%] bg-gradient-to-r from-[#FB840C] to-[#F35C17]'></div>
         <div className='h-[50%] w-[100%] bg-white border-b flex items-center'>
            <div>
                <NavButton />
            </div>
         </div>
      </div>
    </>
  )
}

export default NavBar