import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Schließen bei Klick außerhalb
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Animationsvarianten für gestaffelte Navigation
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <img src="logos/Lions_Logo_Schriftzug_rot.png" alt="Vereinslogo" className="h-10 w-auto" />

                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium font-bebas tracking-widest text-gray-800">
                    <Link to="/about" className="hover:text-red-700 transition">Über uns</Link>
                    <Link to="/teams" className="hover:text-red-700 transition">Teams</Link>
                    <Link to="/news" className="hover:text-red-700 transition">News</Link>
                    <Link to="/contact" className="hover:text-red-700 transition">Kontakt</Link>
                </nav>

                {/* Burger Toggle */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menü öffnen/schließen"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Slide-In mit Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Dark transparent backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Slide-in Menü */}
                        <motion.div
                            ref={menuRef}
                            className="fixed right-0 top-0 h-full w-64 bg-white z-50 shadow-lg"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                <span className="text-lg font-semibold font-bebas text-red-700">Menü</span>
                                <button onClick={() => setMenuOpen(false)} aria-label="Menü schließen">
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <motion.nav
                                className="flex flex-col text-gray-800 font-medium font-bebas px-2"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <motion.div variants={itemVariants}>
                                    <Link to="/about" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:text-red-700 transition">Über uns</Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link to="/teams" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:text-red-700 transition">Teams</Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link to="/news" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:text-red-700 transition">News</Link>
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-3 px-4 hover:text-red-700 transition">Kontakt</Link>
                                </motion.div>
                            </motion.nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}