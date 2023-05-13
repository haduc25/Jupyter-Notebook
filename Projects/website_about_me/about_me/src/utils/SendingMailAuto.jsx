import React, { useEffect, useState } from 'react';
// import { handleSendEmail } from './utils';

const handleSendMailFromLocalStorage = () => {
    // Retrieve form data from localStorage
    const formData = localStorage.getItem('formData');
    if (formData) {
        const parsedData = JSON.parse(formData);

        // Perform the necessary actions with the form data
        // For example, you can send an email using the parsedData

        console.log('Form data from localStorage:', parsedData);
    } else {
        console.log('No form data found in localStorage');
    }
};

const SendingMailAuto = () => {
    useEffect(() => {
        handleSendMailFromLocalStorage();
    }, []);

    return <div>{/* Your component JSX */}</div>;
};

export default SendingMailAuto;
