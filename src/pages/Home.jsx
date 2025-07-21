import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative h-[70vh] flex items-center justify-center bg-top bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('spieltag/4a3c8ded-afb9-46e1-938f-862862e64263.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative z-10 text-center text-red-600 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-bebas tracking-wide mb-4">
                        Willkommen bei den
                    </h1>
                    <div className="flex justify-center mb-6">
                        <img
                            src="logos/Young_Lions_Logo_weiss.png"
                            alt="Vereinslogo"
                            className="h-20 md:h-24 w-auto"
                        />
                    </div>
                    <p className="text-lg md:text-xl font-bebas tracking-wide mb-6">
                        Basketball. Leidenschaft. Gemeinschaft.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-red-700 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
                    >
                        Jetzt Kontakt aufnehmen
                    </Link>
                </div>
            </section>

            {/* ALBA-inspiriertes Grid */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-red-700 mb-10 text-center font-bebas tracking-wide">
                        Entdecke den Verein
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Über uns */}
                        <Link
                            to="/about"
                            className="relative group h-72 md:col-span-2 rounded overflow-hidden shadow-lg"
                        >
                            <img
                                src="grid/e13c473c-8a96-40a9-93cb-8d2833be1e04.jpg"
                                alt="Über uns"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition" />
                            <div className="absolute bottom-4 left-4 text-white text-xl font-bold font-bebas tracking-wide">
                                Mehr über uns erfahren
                            </div>
                        </Link>

                        {/* Teams */}
                        <Link
                            to="/teams"
                            className="relative group h-72 rounded overflow-hidden shadow-lg"
                        >
                            <img
                                src="grid/125c88e6-57cc-4952-9135-d622a0ea8672.jpg"
                                alt="Teams"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition" />
                            <div className="absolute bottom-4 left-4 text-white text-xl font-bold font-bebas tracking-wide">
                                Unsere Teams
                            </div>
                        </Link>

                        {/* News */}
                        <Link
                            to="/news"
                            className="relative group h-72 md:col-span-3 rounded overflow-hidden shadow-lg"
                        >
                            <img
                                src="grid/fe145785-134e-46d2-94ba-062783a2c50b.jpg"
                                alt="News"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition" />
                            <div className="absolute bottom-4 left-4 text-white text-xl font-bold font-bebas tracking-wide">
                                Aktuelle Vereinsnews
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}