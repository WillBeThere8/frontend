import React from "react";
import NavBar from "@/components/Navbar";
import Image from "next/image";

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black h-screen">
      <div className=" h-[100px]">
        <NavBar />
      </div>
      <div
        className="flex justify-center items-center  h-[80%]"
        style={{
          backgroundImage: `url("/Images/signup.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          filter: "grayscale(100%)",
        }}
      >
        <div className="flex justify-center items-center flex-col p-5 w-[500px] bg-gray-900 max-sm:w-[360px]">
          <h1 className="text-white text-3xl pb-5">About Willbethere</h1>
          <h2 className="text-white pb-5">
            This online RSVP service called Will Be There, that allows
            registered users to create events, share the link with their
            friends, and have their friends indicate whether they are attending
            or not.
          </h2>
        </div>
      </div>

      {children}
    </div>
  );
}

export default AboutLayout;
