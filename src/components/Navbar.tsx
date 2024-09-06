import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Navbar = () => {
    return (
        <div className=" w-[80%]">
            <nav className=' p-3 pt-6 w-full flex justify-between text-white '>
                <div className=" font-bold text-2xl">KAVERI</div>
                <ul className=' flex gap-6 float-right items-center'>
                    <li className=' cursor-pointer flex items-center'>Home
                        <i className='mt-1 pl-1'>
                            <IoIosArrowDown /> </i>
                    </li>
                    <li className=' cursor-pointer flex items-center'>Pages
                        <i className='mt-1 pl-1' >
                            <IoIosArrowDown /> </i>
                    </li>
                    <li className=' cursor-pointer flex items-center'>Sections
                        <i className='mt-1 pl-1'>
                            <IoIosArrowDown /> </i>
                    </li>
                    <li className=' cursor-pointer flex items-center'>Docs
                        <i className='mt-1 pl-1'>
                            <IoIosArrowDown /> </i>
                    </li>
                    <li className=' cursor-pointer'>Icons</li>
                    <li className=' cursor-pointer text-black '>
                        <button className=' py-2 px-4  flex items-center rounded-lg bg-yellow-400'>
                            <i className='mt-1 pr-1'><AiOutlineShoppingCart /></i>
                            Buy Now
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
