import React from 'react'
import NavBar from "@/components/Navbar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqsLayout ({ children }: { children: React.ReactNode }) { 
  return (
    <div className="bg-black h-screen">
      <div className=" h-[100px]">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center bg-black text-white 
      my-10 px-5">
        <h1 className="text-3xl text-white">Frequently Asked Questions.</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="my-5">
            <AccordionTrigger>What is willbethere all about ?</AccordionTrigger>
            <AccordionContent>
              It is an online RSVP service that allows registered users to create to create the link with their friends and have their friends indicate if they are attending or not.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="my-5">
            <AccordionTrigger>How can you create an event ?</AccordionTrigger>
            <AccordionContent>
              You can create an event by creating an add account or sign in if you are already a user and this will direct you to the dashboard where you can create an account.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-3" className="my-5">
            <AccordionTrigger>How can you set up an event ?</AccordionTrigger>
            <AccordionContent>
              You can create an event by filling up the details
by including the name, date, time, event image and location.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-4" className="my-5">
            <AccordionTrigger>How do you get information about the event registered ? </AccordionTrigger>
            <AccordionContent>
              The registered users will get the information about the website via email from the organizers.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-5" className="my-5">
            <AccordionTrigger>Will the users get information of the event if anything is altered ?
            </AccordionTrigger>
            <AccordionContent>
              If event details is altered, the users will get information about that details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {children}
      </div>
    </div>
  );
}

export default FaqsLayout