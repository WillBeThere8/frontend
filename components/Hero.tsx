import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="grid place-items-center grid-cols-2 max-sm:grid-cols-1 scrollbar-hide p-4 h-auto bg-defaultBackground">
      <div className="pt-[60px] md:pt-0">
        <h2 className="text-[#fff] text-2xl md:text-5xl font-extrabold leading-tight pb-6">
          <span className="text-[#8a2be2]">Unlock</span> Unforgettable Memories.
        </h2>
        <h3 className="text-[#fff] pb-8 md:w-[400px]">
          Streamline your event planning process and create memorable
          experiences with our intuitive invitation platform.
        </h3>
        <Button>
          <Link href={"/sign-up"}>Get Started Now</Link>
        </Button>
      </div>
      <div className="">
        <Image
          src={"/Images/svgs/hero-photo.svg"}
          width={500}
          height={500}
          alt="hero-photo"
        />
      </div>
    </div>
  );
}

export default Hero;
