import React from 'react';

export default function Teams() {
  const teams = [
    {
      name: 'Herren 1',
      liga: 'Bezirksliga Süd',
      trainer: 'Max Körbe',
      image: '/teams/herren1.jpg',
    },
    {
      name: 'Damen',
      liga: 'Kreisliga West',
      trainer: 'Sandra Blocks',
      image: '/teams/damen.jpg',
    },
    {
      name: 'U18 männlich',
      liga: 'Landesliga',
      trainer: 'Jonas Drive',
      image: '/teams/u18.jpg',
    },
    {
      name: 'U14 weiblich',
      liga: 'Bezirksklasse',
      trainer: 'Anna Fastbreak',
      image: '/teams/u14w.jpg',
    },
    {
      name: 'Minis',
      liga: 'Trainingsgruppe',
      trainer: 'Lukas Dreier',
      image: '/teams/minis.jpg',
    },
  ];

  return (
      <div className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-red-700 font-bebas tracking-wide text-center mb-12">
            Unsere Mannschaften
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team, index) => (
                <div
                    key={index}
                    className="bg-gray-50 rounded shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                      src={team.image}
                      alt={`${team.name} Teamfoto`}
                      className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-red-700 mb-1 font-bebas tracking-wide">
                      {team.name}
                    </h2>
                    <p className="text-sm text-gray-700 mb-1">{team.liga}</p>
                    <p className="text-sm text-gray-600">
                      Trainer: <span className="font-medium">{team.trainer}</span>
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}