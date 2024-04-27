import { useState, useRef } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Demo, SmartDatetimePicker } from "../demo/Demo";

export default function EventTemplate() {
  const [hasNotCreate, sethasNotCreate] = useState(true);
  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [location, setLocation] = useState("");
  const areFieldsFilled = () => {
    return name && descrip && location;
  };

  return (
    <Card className="border-none h-full bg-defaultBackground md:w-[70%] w-full rounded-lg text-white md:px-[4.43rem] yt-[1.188rem]  flex flex-col  relative">
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
        <CardDescription className="text-[#8F8F8F]">
          Fill in the form to begin the event creation process
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-[1.5rem]">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col ">
              <Demo />

              <Label
                htmlFor=""
                className="mb-[0.875rem] font-semibold"
                aria-required="true"
              >
                Event Name*
              </Label>
              <Input
                id=""
                type="text"
                className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[2rem]"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <Label
                htmlFor=""
                className="mb-[0.875rem] font-semibold"
                aria-required="true"
              >
                Event Description*
              </Label>
              <Input
                id=""
                type="text"
                className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[2rem]"
                required
                onChange={(e) => setDescrip(e.target.value)}
              />
              <SmartDatetimePicker />

              <Label
                htmlFor=""
                className="mb-[0.875rem] font-semibold"
                aria-required="true"
              >
                Event Location*
              </Label>
              <Input
                id=""
                type="text"
                className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-[2rem]"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col items-start">
        <Button
          className="flex gap-2 justify-center  mb-[1rem] w-full"
          type="submit"
          onClick={() => sethasNotCreate(false)}
          disabled={!areFieldsFilled()}
        >
          Create Event
        </Button>
      </CardFooter>
      <Modal sethasNotCreate={sethasNotCreate} hasNotCreate={hasNotCreate} />
    </Card>
  );
}
interface ModalProps {
  hasNotCreate: boolean;
  sethasNotCreate: (hasNotCreate: boolean) => void;
}
const Modal = ({ sethasNotCreate, hasNotCreate }: ModalProps) => {
  return (
    <div
      className={`bg-transparent backdrop-blur-sm absolute left-0 top-0 w-full h-full ${
        hasNotCreate ? "hidden" : "flex"
      }  justify-center items-center`}
    >
      <div className="w-[40%] bg-[#0F0F0F] py-4 flex flex-col items-center gap-y-[4rem] rounded-md">
        <p>Create account to continue</p>
        <div className="w-full flex gap-x-[2rem] justify-center">
          <Button variant="secondary" onClick={() => sethasNotCreate(true)}>
            Cancel
          </Button>
          <Button>
            <Link href={"/sign-up"}>Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
