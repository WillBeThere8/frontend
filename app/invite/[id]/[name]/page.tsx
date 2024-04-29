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
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function page({ params }: { params: { id: string; name: string } }) {
  return (
    <>
      <div className="relative h-screen  bg-defaultBackground flex flex-col items-center  justify-center">
        <form className=" flex flex-col items-center  rounded-lg w-[70%]">
          <Card className="border-none bg-defaultBackground w-full">
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
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
              >
                Create Event
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default page;
