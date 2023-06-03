'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Feed = () => {
    const [data, setData] = useState(null);
    const [keyword, setKeyword] = useState('');

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

    const filteredList = (data !== null ? data.filter(item => 
        (item.track && item.track.album ? item.track.album.name : '').toLowerCase().includes(keyword.toLowerCase())
    ) : '')

    console.log("filterd: " + filteredList)

    return (
        <div className='flex flex-center flex-col w-full bg-white'>
            <input type="text" value={keyword} placeholder='Search your favourite music' onChange={e => setKeyword(e.target.value)} className=' border-2 border-gray-600 p-2 mt-4 w-full outline-none ' />
            {data !== null ? (
                <ul className=' flex flex-wrap w-full mt-5 flex-center ' >
                    {filteredList.map((item) => (
                        <li key={item.added_at} className=' home-box w-1/2 md:w-1/4 lg:w-1/5 h-80 m-2 bg-gray-100 '>
                            <a href='#' className=' flex flex-col border-2 border-transparent p-4 cursor-pointer h-full w-full ' >
                            <Image src={item.track && item.track.album ? item.track.album.images[0].url : ''} alt="image" className='contain-image ' width={210} height={250} />
                                <span className=' text-2xl uppercase flex flex-nowrap '>{item.track && item.track.album ? item.track.album.name : 'Unknown'}</span>
                                <span className=' capitalize ' >{item.track && item.track.album ? item.track.album.album_type : 'Unknown'}</span>
                                <br />
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className=' p-2 m-2 text-orange-700 text-center '>Loading...</p>
            )}
        </div>
    );
};

export default Feed;
