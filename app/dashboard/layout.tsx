"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

import { useUser } from "@clerk/clerk-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return (
    <div className="h-full bg-defaultBackground overflow-y-scroll no-scrollbar ">
      <div className="flex justify-center flex-col items-center p-4 ">
        <div className="w-[800px] flex justify-between items-center p-4 border rounded-full bg-[#4A4A4A]	 border-[#D9D9D9] m-2 max-sm:w-[300px] max-sm:p-2  max-md:w-[540px] max-md:p-4 ">
          <h1 className="text-[#FF8C94] text-[22px] max-sm:text-[16px] max-md:text-[18px]">
            ADH24G8
          </h1>
          <h2 className="text-[#FFFFFF] text-[22px] max-sm:hidden max-md:text-[18px]">
            Good {greet}, {user?.firstName}{" "}
          </h2>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="m-10 w-[1240px] bg-[#4A4A4A] h-[500px] border  border-[#D9D9D9]  rounded-2xl max-sm:w-[380px]  max-md:w-[640px]">
          <div className="flex justify-between items-center p-4 ">
            <h3 className="text-[#FFFFFF] text-[22px] max-sm:text-[16px] max-md:text-[18px]">
              My Events
            </h3>
            <Button
              className="bg-[#8A2BE2] flex items-center text-[#fff] max-sm:text-[16px] max-md:text-[18px]"
              type="submit"
            >
              <FaPlus size="20" className="p-1" />
              Create Event
            </Button>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h4 className="text-[#FFFFFF] text-[24px] max-sm:text-[16px] max-md:text-[18px]">
              Welcome to you events board!
            </h4>
            <h5 className="text-[#FFFFFF] text-[18px] max-sm:text-[12px] max-md:text-[12px]">
              {" "}
              You don’t have any events yet. Try to create one✨
            </h5>
            <Image
              src={"/Images/svgs/event.svg"}
              width={400}
              height={300}
              alt="event-photo"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
