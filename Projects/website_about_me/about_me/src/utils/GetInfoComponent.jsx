import React, { useEffect, useState } from 'react';
import { handleSendEmail, handleSendEmail2 } from './utils';

const GetInfoComponent = ({ ...props }) => {
    const [ipAddress, setIpAddress] = useState('');
    const [operatingSystem, setOperatingSystem] = useState('');
    const [deviceType, setDeviceType] = useState('');

    const refreshPageAndUpdateLocalStorage = () => {
        window.location.reload(); // Refresh the page
    };

    useEffect(() => {
        const getIPAddress = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIpAddress(data.ip);
            } catch (error) {
                console.error('Error retrieving IP address:', error);
            }
        };

        const getUserDeviceInfo = () => {
            const userAgent = navigator.userAgent;

            // Operating System
            const os = (userAgent.match(/(Windows|Mac|Linux|Android|iOS)/) || [])[0];
            setOperatingSystem(os);

            // Device Type
            let type = 'Unknown';
            if (/Mobi/.test(userAgent)) {
                type = 'Mobile';
            } else if (/Tablet|iPad/.test(userAgent)) {
                type = 'Tablet';
            } else if (/Windows|Mac|Linux/.test(userAgent)) {
                type = 'Desktop';
            }
            setDeviceType(type);
        };

        getIPAddress();
        getUserDeviceInfo();
    }, []);

    useEffect(() => {
        const storeIPAddress = async () => {
            const storedData = JSON.parse(localStorage.getItem('ipData')) || [];
            const currentDate = new Date().toLocaleDateString();
            // const currentDate = '05/18/2023'
            const storedDate = storedData.length > 0 ? storedData[0].date : null;

            if (storedData.length === 0 || storedDate !== currentDate) {
                storedData[0] = { ip: ipAddress, date: currentDate };
                localStorage.setItem('ipData', JSON.stringify(storedData));
                console.log('Stored IP and date:', storedData);

                refreshPageAndUpdateLocalStorage(); // Refresh the page or update local storage
            }
        };

        if (ipAddress) {
            storeIPAddress();
        }
    }, [ipAddress]);

    return null;
};

export default GetInfoComponent;
