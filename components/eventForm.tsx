import { Demo, SmartDatetimePicker } from '@/app/demo/Demo'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Textarea } from './ui/textarea'

const EventForm = () => {

    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventBanner, setEventBanner] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (eventName || eventDescription || eventTime || eventDate || eventLocation) {
            setFormError("Please fill in all fields correctly")
        }
        console.log(eventName, eventDescription, eventTime, eventDate, eventLocation)
    };

    return (
        <div className=''>
            <form className=" bg-defaultBackground flex flex-col items-center border border-defaultPrimary rounded-lg" onSubmit={handleSubmit}>
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
                                    <Demo />
                                    <div className="">
                                        <div className="name">
                                            <Label
                                                htmlFor=""
                                                className="mb-2 font-semibold text-slate-100 text-sm"
                                                aria-required="true"
                                            >
                                                Event Name*
                                            </Label>
                                            <Input
                                                id=""
                                                type="text"
                                                className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-3"
                                                required
                                                onChange={(e) => setEventName(e.target.value)}
                                            />
                                        </div>
                                        <div className="title">
                                            <Label
                                                htmlFor=""
                                                className="mb-2 font-semibold text-slate-100 text-sm"
                                                aria-required="true"
                                            >
                                                Event Description*
                                            </Label>
                                            <Textarea
                                                id=""
                                                className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-3"
                                                required
                                                onChange={(e) => setEventDescription(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                        <SmartDatetimePicker />
                                        <div className="">
                                            <Label
                                                htmlFor=""
                                                className="mb-2 font-semibold text-slate-100 text-sm"
                                                aria-required="true"
                                            >
                                                Event Location*
                                            </Label>
                                            <Input
                                                id=""
                                                type="text"
                                                className="bg-[#4A4A4A] border-0 focus-visible:ring-offset-0 focus-visible:ring-0 mb-3"
                                                required
                                                onChange={(e) => setEventLocation(e.target.value)}
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
                        {formError && <p className='text-defaultPrimary text-sm'>{formError}</p>}
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default EventForm