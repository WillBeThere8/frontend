"use client";
import { useEffect, useState } from "react";
import supabase from "@/config/supabase";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface Event {
  banner: string;
  name: string;
  date: Date;
  time: any;
  id: number;
  // Add other properties if present
}

interface Attendees {
    full_name: string;
    email: string;
    phone_number: number;
    event_id: number;
    plus_one: string;
    attending: boolean;

}


function EventAttendees() {
    const [event, setEvent] = useState<Event | null>(
      null
    );
    const [attendees, setAttendees] = useState<Attendees[]>([]);
  const router = useParams<{ id: string }>();
  const { id } = router;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: attendees, error: attendeeErr } = await supabase
          .from("attendees")
          .select("*")
          .eq("event_id", Number(id)); 
          setAttendees(attendees || []);
          
          const { data : eventData , error } = await supabase
          .from("events")
          .select("*")
          .eq("id", Number(id));
          setEvent(eventData?.[0]);
        


      } catch (error) {}
    };

    fetchData();
  }, [id]);
  return (
    <div className="h-screen w-full bg-defaultBackground overflow-y-scroll no-scrollbar px-8 py-4 text-white">
      <div className="w-full h-40 rounded-md overflow-hidden">
        <Image
          src={event?.banner || ""}
          alt={event?.name || ""}
          width={400}
          height={800}
          quality={80}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-8 font-bold text-4xl text-center  ">
        {event?.name} Attendees
      </p>

      <div className="md:p-2 flex gap-x-3 w-full overflow-x-scroll md:overflow-hidden md:gap-x-6 justify-center mt-12">
        <div>
          <p className="font-bold md:text-2xl mb-2 ">Name</p>
          {attendees.map((attendee) => (
            <p key={attendee.event_id + attendee.email} className="mb-1">
              {attendee.full_name}
            </p>
          ))}
        </div>
        <div className="md:block hidden">
          <p className="font-bold md:text-2xl mb-2 ">Email</p>
          {attendees.map((attendee) => (
            <p key={attendee.event_id + attendee.email} className="mb-1">
              {attendee.email}
            </p>
          ))}
        </div>

        <div>
          <p className="font-bold md:text-2xl mb-2 ">Phone Number</p>
          {attendees.map((attendee) => (
            <p key={attendee.event_id + attendee.email} className="mb-1">
              {attendee.phone_number}
            </p>
          ))}
        </div>
        <div>
          <p className="font-bold md:text-2xl mb-2 ">Plus One</p>
          {attendees.map((attendee) => (
            <p key={attendee.event_id + attendee.email} className="mb-1">
              {attendee.plus_one ? attendee.plus_one : "None"}
            </p>
          ))}
        </div>
        <div>
          <p className="font-bold md:text-2xl mb-2 ">Attending</p>
          {attendees.map((attendee) => (
            <p key={attendee.event_id + attendee.email} className="mb-1">
              {attendee.attending ? "Yes" : "No" }
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventAttendees;
