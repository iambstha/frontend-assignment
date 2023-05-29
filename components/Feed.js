'use client'
import React, { useState, useEffect } from 'react';

const Feed = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url =
            'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0c5620e49amshf7a88d1bdc7aa7bp11dde4jsn80e4c884a355',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result.items);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(data);

    return (
        <div>
            {data !== null ? (
                <ul className=' flex flex-wrap w-full mt-5 flex-between ' >
                    {data.map((item) => (
                        <li key={item.added_at} className=' w-1/5 h-60 m-2'>
                            <a href='#' className=' flex flex-col border-2 border-r-4 border-orange-300 p-5 cursor-pointer h-full w-full ' >
                                <span className=' text-2xl uppercase stroke-yellow-600 '>{item.track && item.track.album ? item.track.album.name : 'Unknown'}</span>
                                <span className=' capitalize ' >{item.track && item.track.album ? item.track.album.album_type : 'Unknown'}</span>
                                <br />
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Feed;
