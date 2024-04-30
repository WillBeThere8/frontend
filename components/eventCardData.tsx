import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaLink } from "react-icons/fa";

interface Event {
  banner: string;
  name: string;
  date: Date;
  time: any;
  id: number;
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
  const { toast } = useToast();

  const onCopy = () => {
    toast({
      title: "Successful",
      description: `Copied invite link successfully`,
    });
  };
  // const formattedTime = event.time.toLocaleTimeString('en-US');
  return (
    <div className="border rounded-md bg-defaultBackground border-slate-500 shadow-md overflow-hidden">
      <Image
        src={event.banner}
        alt={event.name}
        width={700}
        height={300}
        className="w-full h-[200px] object-cover"
      />
      <h2 className="font-semibold text-xl capitalize text-white p-4">
        {event.name}
      </h2>
      <div className="flex justify-between items-center gap-4 p-y-4 px-4">
        <p className="text-slate-200 text-md">
          {formattedDate || "Date not available"}
        </p>
        <p className="text-slate-200 text-md">{event.time}</p>
      </div>
      <CopyToClipboard
        text={`https://will-be-theree.vercel.app/invite/${event.id}/${event.name}`}
      >
        <Button
          className="bg-[#8A2BE2] flex items-center w-full text-[#fff] max-sm:text-[16px] max-md:text-[18px]"
          type="submit"
          onClick={onCopy}
        >
          <FaLink size="20" className="p-1" />
          Copy Invite Link
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default EventCardData;
