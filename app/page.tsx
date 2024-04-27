'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    if (user) {
      // If the user is signed in, redirect to the dashboard
      router.push("/dashboard");
    }
    setIsClient(true);
  }, [user, router]);

  return (
    <div className="bg-defaultBackground h-screen  overflow-y-scroll no-scrollbar max-sm:h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
