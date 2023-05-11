import React, { useEffect, useState } from 'react';

const IPComponent = () => {
    const [ipAddress, setIpAddress] = useState('');

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

        getIPAddress();
    }, []);

    const isValidIPAddress = ipAddress.match(
        // Regular expression to validate IP address format
        /^([0-9]{1,3}\.){3}[0-9]{1,3}$/,
    );

    return (
        <div>
            <h2>Your IP Address: {ipAddress}</h2>
            {isValidIPAddress && (
                <a
                    href={`https://www.geolocation.com/?ip=${ipAddress}#ipresult`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View IP Details
                </a>
            )}
        </div>
    );
};

export default IPComponent;
