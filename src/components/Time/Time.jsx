import React, { useEffect, useState } from 'react';
import Bookmarks from '../Bookmarks/Bookmarks';

const Time = ({readtime}) => {
    const [time, setTime] = useState(readtime)
    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem("readtime");
        setTime(getReadTimeFromStorage)
    }, [readtime])

    return (
        <div>
            <div className='card text-center bg-info-subtle position-sticky top-0'>
                <h5>Spent time on Read: {time}</h5>
            </div>
        </div>
    );
};

export default Time;