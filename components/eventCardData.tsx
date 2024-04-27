import Image from "next/image";
import React from "react";

interface Event {
  banner: string;
  name: string;
  date: Date;
  time: any;
  // Add other properties if present
}

interface EventCardDataProps {
  event: Event;
}

const EventCardData: React.FC<EventCardDataProps> = ({ event }) => {
  const formattedDate = new Date(event.date)?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // const formattedTime = event.time.toLocaleTimeString('en-US');
  return (
    <div className="">
      <Image
        src={event.banner}
        alt={event.name}
        width={700}
        height={300}
        className="rounded-lg w-full h-[200px] object-cover"
      />
      <h2 className="font-semibold text-2xl capitalize">{event.name}</h2>
      <div className="flex justify-between items-center gap-4 p-y-4">
        <p>{formattedDate || "Date not available"}</p>
        <p>{event.time}</p>
      </div>
    </div>
  );
};

export default EventCardData;
