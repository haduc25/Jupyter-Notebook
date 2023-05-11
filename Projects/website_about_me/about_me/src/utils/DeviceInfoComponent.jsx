import React, { useState, useEffect } from 'react';

const DeviceInfoComponent = () => {
    const [operatingSystem, setOperatingSystem] = useState('');
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
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

        getUserDeviceInfo();
    }, []);

    return (
        <div>
            <h2>Device Information</h2>
            <p>Operating System: {operatingSystem}</p>
            <p>Device Type: {deviceType}</p>
        </div>
    );
};

export default DeviceInfoComponent;
