import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
    return (
        <>
            <Header />

            <main className="main" style={{ paddingBottom: '500px' }}>
                <Home />
                <About />
                <Skills />
            </main>
        </>
    );
}

export default App;
