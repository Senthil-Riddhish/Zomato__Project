import React, { useEffect, useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from 'react-icons/hi';
import { ToMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

function MobileNav() {
    const [isDropDownOpen, IsSetDropDownOpen] = useState(false);
    const [user, setuser] = useState({});
    return (
        <div className="flex w-full items-center justify-between lg:hidden">
            <div className='w-28'>
                <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" alt="No image" />
            </div>
            <div className="flex items-center gap-3 relative">
                <button className="bg-foodie-400 text-white py-2 px-3 rounded-full">Use App</button>
                {user?.fullName ? (
                    <>
                        <div onClick={() => IsSetDropDownOpen((prev) => !prev)} className="border  border-gray-300 text-foodie-400 w-20 h-20 rounded-full p-0.5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcSoxa5ZbkZtngXhyrrU-KaCUdj4FWFWIUBgCWMorCXkPOTinP0A5YEXszL_xURTaXXI&usqp=CAU" className="w-full h-full rounded-full  object-cover" />
                        </div>
                        <div>
                            {isDropDownOpen && (
                                <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-index-20 flex flex-col gap-2'>
                                    <button>Sign Out</button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <span onClick={() => IsSetDropDownOpen((prev) => !prev)} className='border p-2 border-gray-300 text-foodie-400 rounded-full'>
                            <FaUserAlt />
                        </span>
                        {isDropDownOpen && (
                            <div className='absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-index-20 flex flex-col gap-2'>
                                <button>Log In</button>
                                <button>Sign Up</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
function LargerNav() {
    const [isDropDownOpen, IsSetDropDownOpen] = useState(false);
    const [user, setuser] = useState({
        fullName:"Aditya"
    });
    return (
        <>
            <div className='hidden lg:inline container px-18 mx-auto'>
                <div className='gap-4 w-full items-center justify-center lg:flex'>
                    <div className='w-28 mx-5'>
                        <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" alt="No image" />
                    </div>
                    <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded'>
                        <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                            <span className='text-foodie-400'>
                                <HiLocationMarker ></HiLocationMarker>
                            </span>
                            <input type='text' placeholder='Delhi NCR' className='focus:outline-none'></input>
                            <IoMdArrowDropup />
                        </div>
                        <div className='flex w-full items-center gap-2'>
                            <RiSearch2Line />
                            <input type='Search' placeholder='Search for restaurant,cusine or a dish' className='w-full focus:outline-none' />
                        </div>
                    </div>
                    {user?.fullName ? (
                        <>
                            <div className='w-1/4 flex justify-center mx-5 gap-3'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcSoxa5ZbkZtngXhyrrU-KaCUdj4FWFWIUBgCWMorCXkPOTinP0A5YEXszL_xURTaXXI&usqp=CAU" alt="n image display" className="w-20 h-20 rounded-full  object-cover" />
                                <button className='text-gray-500 text-xl hover:text-gap-80 w-20'>Sign Out</button>
                            </div>
                        </>
                    ) : (
                        <div className="w-1/4 flex justify-center gap-5">
                            <button className='text-gray-500 text-xl hover:text-gap-80'>Login</button>
                            <button className='text-gray-500 text-xl hover:text-gap-80'>Sign Up</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
function Navbar() {
    return (
        <>
            <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items">
                <MobileNav />
                <LargerNav />
            </nav>
        </>
    )
}

export default Navbar;
