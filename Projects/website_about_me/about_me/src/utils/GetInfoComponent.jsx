// import React, { useEffect, useState } from 'react';
// import { saveAs } from 'file-saver';

// const GetInfoComponent = () => {
//     const [ipAddress, setIpAddress] = useState('');
//     const [operatingSystem, setOperatingSystem] = useState('');
//     const [deviceType, setDeviceType] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [ipResponse, deviceResponse] = await Promise.all([
//                     fetch('https://api.ipify.org?format=json'),
//                     fetch('https://json.geoiplookup.io/'),
//                 ]);
//                 const [ipData, deviceData] = await Promise.all([ipResponse.json(), deviceResponse.json()]);
//                 setIpAddress(ipData.ip);
//                 setOperatingSystem(deviceData.os);
//                 setDeviceType(deviceData.type);

//                 const logData = {
//                     id: 1,
//                     ip: ipData.ip,
//                     ipDetails: `https://www.geolocation.com/?ip=${ipData.ip}#ipresult`,
//                     time: Date.now(),
//                     date: new Date().toLocaleString(),
//                 };

//                 const file = new Blob([JSON.stringify(logData)], { type: 'application/json' });
//                 saveAs(file, 'info.json');
//             } catch (error) {
//                 console.error('Error retrieving data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return null;
// };

// export default GetInfoComponent;

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
        if (ipAddress) {
            const getCurrentDateTime = () => {
                const id = 1;
                const now = new Date();
                const time = now.toLocaleTimeString();
                const date = now.toLocaleDateString();

                const info = {
                    id,
                    ip: ipAddress,
                    Ip_details: `https://www.geolocation.com/?ip=${ipAddress}#ipresult`,
                    time,
                    date,
                };

                const content = JSON.stringify(info);

                // Create a new file
                const createFile = () => {
                    const fileData = new Blob([content], { type: 'application/json' });
                    const fileURL = URL.createObjectURL(fileData);
                    const link = document.createElement('a');
                    link.href = fileURL;
                    link.setAttribute('download', 'timeOnWebsite.json');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };

                createFile();
            };

            getCurrentDateTime();
        }
    }, [ipAddress]);

    return null;
};

export default GetInfoComponent;
