import React, { useState } from 'react';
import { ReactComponent as Sun } from '../../assets/DarkMode/Sun.svg';
import { ReactComponent as Moon } from '../../assets/DarkMode/Moon.svg';
import './DarkMode.css';

const DarkMode2 = ({ props }) => {
    // console.log('props: ', props);
    const { navLink, navIcon } = props;

    const [isLight, setIsLight] = useState(true);
    const [isSunIcon, SetIsSunIcon] = useState('moon');

    const setDarkThemes = (status) => {
        console.log('status: ', status);
        // alert(isLight, status);
        if (isLight) {
            setDarkMode();
            SetIsSunIcon('sun');
        } else {
            setLightMode();
            SetIsSunIcon('moon');
        }

        setIsLight(status);
    };

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
        <a onClick={() => setDarkThemes(!isLight)} className={navLink}>
            <i className={`bx bx-${isSunIcon} ${navIcon}`}></i>
            <p className="dark_mode_text-neon">{isLight ? 'Dark' : 'Light'}</p>
        </a>
    );
};

export default DarkMode2;
