// src/components/Spielplan.jsx
import React from 'react';

const spiele = [
    {
        datum: '20.09.2025',
        uhrzeit: 'To be decided',
        heim: 'KKK Haiterbach 3',
        gast: 'TSV Calw',
        ort: 'To be decided',
    },
    {
        datum: '28.09.2025',
        uhrzeit: '17:00',
        heim: 'TSV Calw',
        gast: 'TSV Lustnau 2',
        ort: 'Walter-Lindner-Sporthalle',
    },
    {
        datum: '04.10.2025',
        uhrzeit: 'To be decided',
        heim: 'VfL Nagold',
        gast: 'TSV Calw',
        ort: 'Bächlenhalle Berufl. Schulzentrum',
    },
];

export default function Spielplan() {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-red-700 mb-8 font-bebas tracking-wide">
                    Nächste Spiele
                </h2>
                <div className="space-y-4">
                    {spiele.map((spiel, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded shadow p-4 md:flex justify-between items-center"
                        >
                            <div className="text-left mb-2 md:mb-0">
                                <div className="text-sm text-gray-500">{spiel.datum} – {spiel.uhrzeit}</div>
                                <div className="text-lg font-semibold text-red-800">
                                    {spiel.heim} vs. {spiel.gast}
                                </div>
                            </div>
                            <div className="text-sm text-gray-600">{spiel.ort}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}