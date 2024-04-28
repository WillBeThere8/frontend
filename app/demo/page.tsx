"use client";
import Image from "next/image";
import { Demo, SmartDatetimePicker } from "./Demo";
import EventTemplate from "../_ui/EventTemplate";

export default function page() {
  return (
    <div className="w-full  pb-8 bg-defaultBackground mx-auto flex justify-center items-center">
      <EventTemplate />
    </div>
  );
}
