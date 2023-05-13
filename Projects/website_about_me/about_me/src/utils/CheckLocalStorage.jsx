import React, { useEffect, useState } from 'react';
import { handleSendEmail2 } from './utils';

const CheckLocalStorage = () => {
    const [isEmailSent, setEmailSent] = useState(false);

    useEffect(() => {
        const ipData = JSON.parse(localStorage.getItem('ipData'));
        if (ipData && ipData.length > 0 && !isEmailSent) {
            const storedDate = parseDate(ipData[0].date, 'dd/mm/yyyy');
            const today = new Date();
            // if (!areDatesEqual(storedDate, today)) {
            //     handleSendEmail2();
            //     setEmailSent(true);
            //     console.log('sending...');
            // }
            handleSendEmail2();
            setEmailSent(true);
            console.log('sending...');
            console.log(storedDate, today);
        }
    }, [isEmailSent]);

    const parseDate = (dateString, format) => {
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    };

    const areDatesEqual = (date1, date2) => {
        return date1.getDate() === date2.getDate();
    };

    return <></>; // You can customize the component's JSX as needed
};

export default CheckLocalStorage;
