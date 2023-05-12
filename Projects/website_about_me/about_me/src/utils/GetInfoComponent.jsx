import React, { useEffect, useState } from 'react';

const GetInfoComponent = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [operatingSystem, setOperatingSystem] = useState('');
    const [deviceType, setDeviceType] = useState('');

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
        const storeIPAddress = () => {
            const storedData = JSON.parse(localStorage.getItem('ipData')) || [];

            const currentDate = new Date().toLocaleDateString();
            const storedIP = storedData.length > 0 ? storedData[storedData.length - 1].ip : null;
            const storedDate = storedData.length > 0 ? storedData[storedData.length - 1].date : null;

            if (!storedIP || storedIP !== ipAddress || storedDate !== currentDate) {
                const newData = [{ ip: ipAddress, date: currentDate }];
                localStorage.setItem('ipData', JSON.stringify(newData));
                console.log('Stored IP and date:', newData);
            }
        };

        if (ipAddress) {
            storeIPAddress();
        }
    }, [ipAddress]);

    return null;
};

export default GetInfoComponent;
