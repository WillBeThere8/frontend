import { Demo, SmartDatetimePicker } from '@/app/demo/Demo'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Textarea } from './ui/textarea'
import supabase from '@/config/supabase'
import { useToast } from "@/components/ui/use-toast"


const EventForm = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [time, setTime] = useState('');
    // const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [banner, setBanner] = useState('');
    const [formError, setFormError] = useState<string | null>('');
    const { toast } = useToast()

    const handleDemoChange = (imageUrl: any) => {
        // Handle the change event for Demo component
        // For example, you can set the event banner state here
        setBanner(imageUrl);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!name || !description || !location) {
            setFormError("Please fill in all fields correctly")
            return;
        }
        const { data, error } = await supabase.from('events').insert([
            { name, description, location, banner },
        ])

        if (error) {
            console.log(error)
            setFormError("Please fill in all fields correctly")
        }

        if (data) {
            console.log(data)
            setFormError(null)
            // Reset form fields after successful submission
            setName('');
            setDescription('');
            setLocation('');
            setBanner('');
            toast({
                title: "Successful",
                description: `Event has been created successfully`,
              })
        }

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
                                    <Demo onChange={handleDemoChange} />
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

                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                        <SmartDatetimePicker />
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