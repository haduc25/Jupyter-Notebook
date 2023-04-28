import React, { useState, useEffect } from 'react';
import './DarkMode.css';

const DarkMode2 = ({ props }) => {
    const { navLink, navIcon } = props;

    const [isLight, setIsLight] = useState(true);
    const [isSunIcon, setIsSunIcon] = useState('moon');

    useEffect(() => {
        // check local storage for saved theme
        const savedTheme = localStorage.getItem('theme');

        // set initial theme based on saved theme, or default to light mode
        if (savedTheme === 'dark') {
            setIsLight(false);
            setDarkMode();
            setIsSunIcon('sun');
        }
    }, []);

    const setDarkThemes = (status) => {
        if (status) {
            setLightMode();
            setIsSunIcon('moon');
        } else {
            setDarkMode();
            setIsSunIcon('sun');
        }

        setIsLight(status);
        localStorage.setItem('theme', status ? 'light' : 'dark');
    };

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    };

    return (
        <a onClick={() => setDarkThemes(!isLight)} className={navLink}>
            <i className={`bx bx-${isSunIcon} ${navIcon}`}></i>
            <p className="dark_mode_text-neon">{isLight ? 'Dark' : 'Light'}</p>
        </a>
    );
};

export default DarkMode2;
