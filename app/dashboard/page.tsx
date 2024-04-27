"use client";

import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

import { useUser } from "@clerk/clerk-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FetchData from "@/components/fetchData";
import EventForm from "@/components/eventForm";
const Dashboard = () => {
  const { user } = useUser();

  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  const [isClient, setIsClient] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-screen bg-defaultBackground overflow-y-scroll no-scrollbar ">
      <div className="flex justify-center flex-col items-center p-4 ">
        <div className="md:w-[60%] w-[100%] flex justify-between items-center p-4 border rounded-full bg-[#4A4A4A]	 border-[#D9D9D9] m-2 max-sm:p-2 max-md:p-4">
          <h1 className="text-[#FF8C94] text-[22px] max-sm:text-[16px] max-md:text-[18px]">
            ADH24G8
          </h1>
          <h2 className="text-[#FFFFFF] text-[22px] max-sm:hidden max-md:text-[18px]">
            Good {greet}, {user?.firstName}{" "}
          </h2>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="m-10 md:w-[80%] w-[100%] bg-[#4A4A4A] h-[500px] border border-[#D9D9D9] rounded-2xl overflow-y-scroll events">
          <div className="flex justify-between items-center p-4 ">
            <h3 className="text-[#FFFFFF] text-[22px] max-sm:text-[16px] max-md:text-[18px]">
              My Events
            </h3>
            <Dialog>
              <DialogTrigger>
                <Button
                  className="bg-[#8A2BE2] flex items-center text-[#fff] max-sm:text-[16px] max-md:text-[18px]"
                  type="submit"
                  onClick={() => setSuccess(true)}
                >
                  <FaPlus size="20" className="p-1" />
                  Create Event
                </Button>
              </DialogTrigger>
              {success && (
                <DialogContent>
                  <EventForm submittedState={setSuccess} />
                </DialogContent>
              )}
            </Dialog>
          </div>
          <FetchData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
