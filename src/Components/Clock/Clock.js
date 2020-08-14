import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(getCurrentTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getCurrentTime);
        }, 1000);
        // Clear timeout when unmounting
        return () => clearInterval(timer);
    });

    const getCurrentTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        return currentTime;
    }

    return (
        <div>
            <h1>Current time is {time} </h1>
        </div>
    );
}

export default Clock;