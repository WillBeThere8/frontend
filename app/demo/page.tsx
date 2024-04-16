"use client";
import Image from "next/image";
import { Demo, SmartDatetimePicker } from "./Demo";
import EventTemplate from "../_ui/EventTemplate";

export default function page() {
  return (
    <main className=" w-full bg-defaultBackground h-full pt-2 pb-3 flex flex-col items-center justify-center">
      <EventTemplate />
    </main>
  );
}
