import Image from 'next/image';
import React from 'react';

interface Event {
    event_banner: string;
    event_name: string;
    event_date: string;
    event_time: string;
    // Add other properties if present
}

interface EventCardDataProps {
    event: Event;
}

const EventCardData: React.FC<EventCardDataProps> = ({ event }) => {
    return (
        <div className=''>
                <Image
                    src={event.event_banner}
                    alt={event.event_name}
                    width={700}
                    height={300}
                    className="rounded-lg w-full h-[200px]"
                />
                <h2>{event.event_name}</h2>
                <div className='flex justify-between items-center gap-4 p-4'>
                    <p>{event.event_date}</p>
                    <p>{event.event_time}</p>
                </div>
        </div>
    );
};

export default EventCardData;
