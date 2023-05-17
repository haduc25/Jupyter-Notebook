import React, { useEffect } from 'react';
import { handleSendEmail2 } from './utils';

const CheckLocalStorage = () => {
    useEffect(() => {
        const lastAccessDate = localStorage.getItem('lastAccessDate');
        const currentDate = new Date().toLocaleDateString();
        // const currentDate = '05/18/2023';

        let timeoutId; // Variable to store the timeout ID

        if (lastAccessDate !== currentDate) {
            timeoutId = setTimeout(() => {
                handleSendEmail2();
                localStorage.setItem('lastAccessDate', currentDate);
                console.log('Sending email...');
            }, 3000); // Delay of 3 seconds (3000 milliseconds)
        }

        return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component is unmounted or the dependencies change
        };
    }, []);

    return null;
};

export default CheckLocalStorage;
