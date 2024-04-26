import React, { useEffect, useState } from 'react';
import supabase from '@/config/supabase';
import EventCardData from './eventCardData';
import Image from "next/image";

const FetchData: React.FC = () => {
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [eventData, setEventData] = useState<any[] | null>(null);
    const [isLoading, setIsLoading] = useState(true); // State to track loading
    const [hasData, setHasData] = useState(false); // State to track data availability

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('events')
                    .select('*');

                if (error) {
                    throw error;
                }

                if (data) {
                    setEventData(data);
                    setFetchError(null);
                    setHasData(data.length > 0);
                }
            } catch (error) {
                setFetchError('Could not fetch data');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Show loading indicator while fetching data
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="overflow-y-auto">
            {fetchError && <p className="text-red-500">{fetchError}</p>}
            {!hasData ? ( // If no data available, display message and image
                <div className="flex justify-center items-center flex-col">
                    <h4 className="text-[#FFFFFF] text-[24px] max-sm:text-[16px] max-md:text-[18px]">
                        Welcome to your events board!
                    </h4>
                    <h5 className="text-[#FFFFFF] text-[18px] max-sm:text-[12px] max-md:text-[12px]">
                        You don’t have any events yet. Try to create one✨
                    </h5>
                    <Image
                        src={"/Images/svgs/event.svg"}
                        width={400}
                        height={300}
                        alt="event-photo"
                    />
                </div>
            ) : (
                <div className="gap-4 justify-center items-center w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {eventData && eventData.map((event, index) => (
                        <div key={index}>
                            <EventCardData event={event} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FetchData;
