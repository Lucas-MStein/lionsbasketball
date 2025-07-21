import React from 'react';

export default function News() {
  const news = [
    {
      title: 'U18 gewinnt Krimi in der Verlängerung',
      image: '/news/u18_krimi.jpg',
      date: '18. Juli 2025',
      teaser: 'Mit 78:76 setzt sich unsere U18 gegen Sindelfingen durch – Spannung bis zur letzten Sekunde!',
    },
    {
      title: 'Damen starten stark in die neue Saison',
      image: '/news/damen_start.jpg',
      date: '14. Juli 2025',
      teaser: 'Die Damenmannschaft zeigt zum Auftakt eine starke Teamleistung und holt sich verdient den Sieg.',
    },
    {
      title: 'Young Lions Minis auf Turnier in Tübingen',
      image: '/news/minis_tuebingen.jpg',
      date: '10. Juli 2025',
      teaser: 'Für unsere Kleinsten ging es am Wochenende nach Tübingen – mit viel Spaß und tollen Erfahrungen.',
    },
  ];

  return (
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-red-700 font-bebas tracking-wide text-center mb-12">
            Vereinsnews & Spielberichte
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
                <div
                    key={index}
                    className="bg-gray-50 rounded shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                      src={article.image}
                      alt={article.title}
                      className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h2 className="text-lg font-bold text-red-700 mb-2 font-bebas tracking-wide">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-700 mb-4">{article.teaser}</p>
                    {/* Optional: Button für Detailseite */}
                    <button className="text-red-600 font-medium hover:underline">
                      Weiterlesen
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}