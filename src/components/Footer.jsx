import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-red-700 text-white text-sm">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Logo + Name */}
                <div className="flex flex-col items-start">
                    <img
                        src="logos/young_lions_weiss.png"
                        alt="Vereinslogo"
                        className="h-12 w-auto mb-3"
                    />
                    <p className="font-semibold tracking-wide">TSV Calw – Basketball</p>
                    <p className="text-xs mt-1 text-white/80">© 2025 – Alle Rechte vorbehalten</p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-center space-x-6 text-xl">
                    <a
                        href="https://www.instagram.com/tsvcalw_basketballlions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/70 transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.tiktok.com/@calw_basketball"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/70 transition"
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href="mailto:basketball@tsvcalw.de"
                        className="hover:text-white/70 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                {/* Impressum */}
                <div className="flex md:justify-end">
                    <Link to="/impressum" className="hover:underline text-white/80">
                        Impressum
                    </Link>
                </div>
            </div>

            <div className="text-center text-xs bg-red-800 py-2 text-white/70">
                Entwickelt mit ❤️ für den Sport
            </div>
        </footer>
    );
}