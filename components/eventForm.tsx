import { Demo, SmartDatetimePicker } from "@/app/demo/Demo";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import supabase from "@/config/supabase";
import { useToast } from "@/components/ui/use-toast";
import { createEvent } from "@/app/service/createEvent";
import Loader from "./ui/loader";

const EventForm = ({
  submittedState,
}: {
  submittedState: (success: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [banner, setBanner] = useState("");
  const [formError, setFormError] = useState<string | null>("");
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleDemoChange = (imageUrl: any) => {
    // Handle the change event for Demo component
    // For example, you can set the event banner state here
    setBanner(imageUrl);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    if (!name || !description || !location) {
      setFormError("Please fill in all fields correctly");
      return;
    }

    const data: any = {
      name,
      description,
      location,
      banner,
      date,
      time,
    };
    // const { data, error } = await supabase
    //   .from("events")
    //   .insert([{ name, description, location, banner }]);
    const { data: eventData, error: eventError } = await createEvent({
      ...data,
    });

    if (eventError) {
      console.log(eventError);
      setFormError("Please fill in all fields correctly");
    }
    if (eventData) {
      console.log(data);
      setFormError(null);
      // Reset form fields after successful submission
      setName("");
      setDescription("");
      setLocation("");
      setBanner("");
      setDate("");
      setTime("");
      toast({
        title: "Successful",
        description: `Event has been created successfully`,
      });
      setIsSuccess(false);
      submittedState(false);
    }
  };

  return (
    <div className="relative">
      <form
        className=" bg-defaultBackground flex flex-col items-center border border-defaultPrimary rounded-lg"
        onSubmit={handleSubmit}
      >
        <Card className="border-none bg-defaultBackground">
          <CardHeader>
            <CardTitle>Create New Event</CardTitle>
            <CardDescription className="text-[#8F8F8F]">
              Fill in the form to begin the event creation process
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-2">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col w-full">
                  <Demo onChange={handleDemoChange} banner={banner} />
                  <div className="">
                    <div className="name">
                      <Label
                        htmlFor="title"
                        className="mb-2 font-semibold text-slate-100 text-sm"
                        aria-required="true"
                      >
                        Event Name*
                      </Label>
                      <Input
                        id="title"
                        type="text"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-3"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div className="title">
                      <Label
                        htmlFor="description"
                        className="mb-2 font-semibold text-slate-100 text-sm"
                        aria-required="true"
                      >
                        Event Description*
                      </Label>
                      <Textarea
                        id="description"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-3"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <SmartDatetimePicker
                      onDateChange={setDate}
                      onTimeChange={setTime}
                      date={date}
                      time={time}
                    />
                    <div className="">
                      <Label
                        htmlFor="location"
                        className="mb-2 font-semibold text-slate-100 text-sm"
                        aria-required="true"
                      >
                        Event Location*
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-3"
                        required
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col items-start">
            <Button
              className="flex gap-2 justify-center w-full"
              type="submit"
              disabled={isSuccess}
            >
              Create Event
            </Button>
            {formError && (
              <p className="text-defaultPrimary text-sm">{formError}</p>
            )}
          </CardFooter>
        </Card>
      </form>
      {isSuccess && <Loader />}
    </div>
  );
};

export default EventForm;
