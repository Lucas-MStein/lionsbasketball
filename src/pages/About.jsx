import React from 'react';

export default function About() {
  return (
      <div className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 font-bebas tracking-wide mb-4">
            Über den Verein
          </h1>
          <p className="text-gray-700 text-lg">
            Die Young Lions stehen für Teamgeist, Entwicklung und echte Basketball-Leidenschaft – in Calw und darüber hinaus.
          </p>
        </div>

        {/* Vereinsgeschichte */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-red-700 font-bebas tracking-wide mb-4">
            Unsere Geschichte
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Gegründet im Jahr 2017 als Jugendinitiative, sind die Young Lions heute einer der engagiertesten
            Basketballvereine der Region. Mit stetigem Wachstum, großem ehrenamtlichen Engagement und
            ambitionierten Teams in allen Altersklassen haben wir uns als sportlicher und sozialer Anker etabliert.
          </p>
        </section>

        {/* Philosophie */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-red-700 font-bebas tracking-wide mb-4">
            Unsere Philosophie
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Teamgeist vor Einzelleistung</strong> – Erfolg entsteht im Zusammenspiel.</li>
            <li><strong>Nachwuchs fördern</strong> – wir investieren in nachhaltige Entwicklung.</li>
            <li><strong>Respekt & Fairness</strong> – auf dem Feld und abseits des Courts.</li>
            <li><strong>Inklusion & Offenheit</strong> – alle sind willkommen, unabhängig von Herkunft oder Leistungsstand.</li>
          </ul>
        </section>

        {/* Trainerteam */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-red-700 font-bebas tracking-wide mb-6">
            Unser Trainerteam
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded shadow">
              <h3 className="text-lg font-bold text-red-600 mb-1">Maximilian Körbe</h3>
              <p className="text-sm text-gray-700">Headcoach Herren 1 & sportlicher Leiter</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h3 className="text-lg font-bold text-red-600 mb-1">Anna Fastbreak</h3>
              <p className="text-sm text-gray-700">U16- & Jugendkoordination</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h3 className="text-lg font-bold text-red-600 mb-1">Lukas Dreier</h3>
              <p className="text-sm text-gray-700">Mini-Trainer & Grundschulprojekt</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h3 className="text-lg font-bold text-red-600 mb-1">Sandra Blocks</h3>
              <p className="text-sm text-gray-700">Athletiktraining & Damenkoordination</p>
            </div>
          </div>
        </section>

        {/* Zahlen & Fakten */}
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-700 font-bebas tracking-wide mb-6">
            Zahlen & Fakten
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-red-700 font-bold text-xl">
            <div>
              <p className="text-4xl">2017</p>
              <p className="text-sm text-gray-700 font-normal">Gründungsjahr</p>
            </div>
            <div>
              <p className="text-4xl">150+</p>
              <p className="text-sm text-gray-700 font-normal">aktive Mitglieder</p>
            </div>
            <div>
              <p className="text-4xl">9</p>
              <p className="text-sm text-gray-700 font-normal">Mannschaften</p>
            </div>
            <div>
              <p className="text-4xl">12</p>
              <p className="text-sm text-gray-700 font-normal">ehrenamtliche Trainer:innen</p>
            </div>
          </div>
        </section>
      </div>
  );
}