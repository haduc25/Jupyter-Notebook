import React from 'react';
import { ReactComponent as Sun } from '../../assets/DarkMode/Sun.svg';
import { ReactComponent as Moon } from '../../assets/DarkMode/Moon.svg';
import './DarkMode.css';

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    };

    // handle when toggle
    const toggleThemes = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className="dark_mode">
            <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" onChange={toggleThemes} />
            <label className="dark_mode_label" for="darkmode-toggle">
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
