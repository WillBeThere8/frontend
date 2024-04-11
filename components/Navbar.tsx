"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


  
function   NavBar() {
  const [menu, setMenu] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in p-10 ">
        <div className="flex justify-between items-center">
          <h1 className="">ADH24G8</h1>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <Link href="/faq"
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
             FAQs
                      </Link>
            <Link href="/about"
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              About
            </Link>
            <Link href="/contact"
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
                      >
                          Contact
            </Link>
            <Link href="signin"
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              Sign in
            </Link>

    
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999]   py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : "bg-white"
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <h1>ADH24G8</h1>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
                <FaTimes  size={24} className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}/>

            ) : (
                <IoIosMenu size={24}  className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu} />

             
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] xl:gap-[50px] text-[16px] flex-col select-none ">
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Destinations
                </p>
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Hotels
                </p>
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Flights
                </p>
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Bookings
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
