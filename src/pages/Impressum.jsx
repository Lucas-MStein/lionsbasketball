import React from 'react';

export default function Impressum() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Impressum</h1>
            <p className="mb-2">Angaben gemäß § 5 TMG:</p>
            <p className="mb-4">
                TSV Musterstadt e.V.<br />
                Musterstraße 123<br />
                12345 Musterstadt
            </p>
            <p>Vertreten durch: Max Mustermann (1. Vorstand)</p>
            {/* Weitere rechtliche Angaben … */}
        </div>
    );
}