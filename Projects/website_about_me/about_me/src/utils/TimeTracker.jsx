import React, { useState, useEffect } from 'react';

const TimeTracker = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        setStartTime(new Date());

        // Cleanup function to handle component unmount
        return () => {
            setEndTime(new Date());
            // Here, you can send the time duration to your server or perform any other desired action
        };
    }, []);

    return (
        <div>
            <h1>Welcome to My Website</h1>
            <p>Start Time: {startTime && startTime.toLocaleTimeString()}</p>
            <p>End Time: {endTime && endTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default TimeTracker;
