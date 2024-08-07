"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosMenu } from "react-icons/io";
import { usePathname } from "next/navigation";
import Image from "next/image";

function NavBar() {
  const pathname = usePathname();

  const [menu, setMenu] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 h-[60px] text-[#FF8C94]">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in p-10 ">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-[#FF8C94] text-[22px]">
            <Image
              src="/Images/svgs/adc-logo.svg"
              alt="logo"
              width={128}
              height={16}
            />
          </Link>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none text-[#FFFFFF]">
            <Link
              href="/faqs"
              className={` link ${
                pathname === "/faqs"
                  ? "text-[#8a2be2] border-b-2 border-[#8a2be2]"
                  : ""
              } hover:text-[#8A2BE2] hover:transition-all text-xl font-[600] cursor-pointer flex items-center gap-2`}
            >
              FAQs
            </Link>
            <Link
              href="/about"
              className={`link ${
                pathname === "/about"
                  ? "text-[#8a2be2] border-b-2 border-[#8a2be2]"
                  : ""
              } hover:text-[#8A2BE2]  hover:transition-all text-xl font-[600] cursor-pointer flex items-center gap-2`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`link ${
                pathname === "/contact"
                  ? "text-[#8a2be2] border-b-2 border-[#8a2be2]"
                  : ""
              } hover:text-[#8A2BE2] hover:transition-all text-xl font-[600] cursor-pointer flex items-center gap-2`}
            >
              Contact
            </Link>
            <Link
              href="/sign-in"
              className={`link ${
                pathname === "/sign-in"
                  ? "text-[#8a2be2] border-b-2 border-[#8a2be2]"
                  : ""
              }hover:text-[#8A2BE2] hover:transition-all text-xl font-[600] cursor-pointer flex items-center gap-2`}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] py-4 animate-in fade-in zoom-in  ${
          menu ? "py-2" : " "
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Image
              src="/Images/svgs/adc-logo.svg"
              alt="logo"
              width={100}
              height={10}
            />
          </div>
          <div className="flex items-center gap-[40px] ">
            {menu ? (
              <LiaTimesSolid
                size={24}
                className="cursor-pointer animate-in fade-in zoom-in text-[#ffffff]"
                onClick={toggleMenu}
              />
            ) : (
              <IoIosMenu
                size={24}
                className="cursor-pointer animate-in fade-in zoom-in text-[#ffffff]"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right  ">
            <div className="flex flex-col gap-8 mt-8 mx-4 bg-[#1F1F1F] p-4 ">
              <div className=" flex gap-[20px] xl:gap-[50px] text-[16px] text-[#ffffff] flex-col select-none ">
                <Link
                  href="/faqs"
                  className={`hover:text-[#8a2be2]  font-[600] cursor-pointer flex items-center gap-2`}
                >
                  FAQs
                </Link>
                <Link
                  href="/about"
                  className={`hover:text-[#8a2be2]  font-[600] cursor-pointer flex items-center gap-2`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-[#8a2be2]  font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Contact
                </Link>
                <Link
                  href="/sign-in"
                  className={`hover:text-[#8a2be2]  font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Sign in
                </Link>
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
