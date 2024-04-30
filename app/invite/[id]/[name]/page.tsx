"use client";
import { Demo } from "@/app/demo/Demo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NavBar from "./Navs";
import {
  createInvite,
  fetchEventforAttendees,
} from "@/app/service/createInvites";
import Loader from "@/components/ui/loader";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

interface Event {
  banner: string;
  name: string;
  date: string;
  time: any;
  id: number;
  // Add other properties if present
}

function Page({ params }: { params: { id: string; name: string } }) {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [eventData, setEventData] = useState<Event[] | null>(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [hasplusOne, setHasplusOne] = useState(false); // State to track data availability
  const [full_name, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone_number, setPhone] = useState<number | null>(null);
  const [plus_one, setPlusone] = useState<string | null>(null);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [valueA, setValueA] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { events, error } = await fetchEventforAttendees(
          Number(params.id)
        );

        if (error) {
          throw error;
        }

        if (events) {
          setEventData(events);
          setFetchError(null);
        }
      } catch (error) {
        setFetchError("Could not fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!full_name || !email || !phone_number) {
      setFormError("Please fill in all fields correctly");
      return;
    }
    if (!formError) {
      setIsSuccess(true);
    }
    const data: any = {
      full_name,
      email,
      phone_number,
      event_id: Number(params.id),
      plus_one,
      attending: valueA ? true : false,
    };

    const { data: inviteData, error: eventError } = await createInvite({
      ...data,
    });

    if (eventError) {
      console.log(eventError);
      setFormError("Please fill in all fields correctly");
    }
    if (inviteData) {
      setFormError(null);
      setFullName("");
      setEmail("");
      setPhone(null);
      setAttending(null);
      setPlusone("");
      toast({
        title: "Successful",
        description: `Event has been created successfully`,
      });
      setIsSuccess(false);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-defaultBackground">
        <Loader />
      </div>
    );
  }
  return (
    <div className="h-screen  bg-defaultBackground relative">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-[1300px] mx-auto  px-9 mt-10">
          <div className="w-full h-[18rem] rounded-xl overflow-hidden">
            <Image
              src={eventData?.[0]?.banner || ""}
              alt="event image"
              width={1300}
              height={670}
              className="w-full h-full object-cover object-center mt-[-5rem]"
              layout="intrinsic"
              quality={100}
            />
          </div>

          <Card className="w-full px-3 bg-transparent text-white border-none">
            <CardHeader className="relative w-full">
              <CardTitle className="font-extrabold">
                Invitation to &nbsp;
                <span className="text-defaultPrimary">
                  {eventData?.[0]?.name}
                </span>
              </CardTitle>
              <CardDescription>{eventData?.[0]?.name}</CardDescription>
              <div className="md:absolute mt-4 md:right-0 md:top-6 flex gap-x-4">
                <FaCalendar />
                <p>
                  {eventData?.[0]?.date &&
                    dateFormatter.format(new Date(eventData?.[0]?.date))}
                </p>
              </div>
            </CardHeader>

            <CardContent className="mt-10">
              <form>
                <div className="grid w-full items-center gap-4">
                  <RadioGroup
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement; // Type casting
                      setValueA(target.value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="r1">Will you make it to the event?</Label>
                      <RadioGroupItem value="default" id="r1" />
                    </div>
                  </RadioGroup>
                  <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-y-0 gap-y-4 mt-5">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Full Name*</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter you name"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[0.875rem]"
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter you email"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[0.875rem]"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>{" "}
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="tel">Phone Number*</Label>
                      <Input
                        id="tel"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[0.875rem]"
                        onChange={(e) => setPhone(Number(e.target.value))}
                        required
                      />
                    </div>
                  </div>

                  <p
                    className="text-center text-defaultAccent underline cursor-pointer mt-2"
                    onClick={() => setHasplusOne(!hasplusOne)}
                  >
                    {hasplusOne ? "No plus one" : "Add a Plus-One Invite"}
                  </p>
                  {hasplusOne && (
                    <div className="flex flex-col space-y-1.5 mx-auto">
                      <Label htmlFor="plus_one">Plus one*</Label>
                      <Input
                        id="plus_one"
                        type="text"
                        placeholder="Enter your phone number"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[0.875rem]"
                        onChange={(e) => setPlusone(e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>
              </form>
            </CardContent>

            <CardFooter>
              <Button
                type="submit"
                className="md:w-[80%] w-full h-[2rem] mt-4 md:mx-[10%] mx-auto bg-defaultAccent text-white"
                disabled={isSuccess}
              >
                RSVP
              </Button>
              {formError && (
                <p className="text-defaultPrimary text-sm">{formError}</p>
              )}
            </CardFooter>
          </Card>
        </div>
      </form>

      {isSuccess && <Loader />}
    </div>
  );
}

export default Page;
