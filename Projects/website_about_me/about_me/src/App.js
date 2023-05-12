import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import DarkMode from './components/themes/DarkMode';
import { ToastContainer, toast } from 'react-toastify';

//
import IPComponent from './utils/IPComponent';
import DeviceInfoComponent from './utils/DeviceInfoComponent';
import GetInfoComponent from './utils/GetInfoComponent';
import TimeTracker from './utils/TimeTracker';

function App() {
    return (
        <>
            {/* <GetInfoComponent /> */}
            <Header />

            <main className="main">
                <Home />
                {/* <DarkMode /> */}
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Work />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
            <ScrollUp />
            <ToastContainer />

            {/* <IPComponent />
            <DeviceInfoComponent /> */}
            {/* <GetInfoComponent /> */}
        </>
    );
}

export default App;
