import React, { useEffect, useState } from 'react';
import supabase from '@/config/supabase';
import EventCardData from './eventCardData';

const FetchData: React.FC = () => {
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [eventData, setEventData] = useState<any[] | null>(null);

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
                    console.log(data);
                }
            } catch (error) {
                // console.error(error.message);
                setFetchError('Could not fetch data');
                setEventData(null);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-white w-screen h-screen">
            <h1 className="">Supabase</h1>
            {fetchError && <p className="text-red-500">{fetchError}</p>}
            {eventData && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center w-full">
                    {eventData.map((event, index) => (
                        <div key={index} className=''>
                            <EventCardData event={event} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FetchData;
