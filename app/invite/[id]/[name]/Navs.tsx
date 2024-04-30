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
    <div className="sticky w-full top-0 shadow-none backdrop-blur-lg z-20 h-[60px] text-[#FF8C94]">
      {/* DESKTOP */}
      <div className="w-full h-full  animate-in fade-in zoom-in p-3 md:p-10">
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
              href="/"
              className={` link p-3 bg-defaultAccent text-white text-center rounded-sm`}
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
