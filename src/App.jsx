import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import News from './pages/News';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="teams" element={<Teams />} />
                <Route path="news" element={<News />} />
                <Route path="contact" element={<Contact />} />
                <Route path="impressum" element={<Impressum />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
}