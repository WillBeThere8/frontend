'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useUser } from "@clerk/clerk-react";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // If the user is signed in, redirect to the dashboard
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="bg-defaultBackground  overflow-y-scroll no-scrollbar md:h-screen scrollbar ">
      <Navbar />
      <Hero />
    </div>
  );
}
