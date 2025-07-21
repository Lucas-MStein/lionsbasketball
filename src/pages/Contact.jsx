import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
      <div className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-red-700 font-bebas tracking-wide text-center mb-10">
            Kontaktiere uns
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Kontaktinformationen */}
            <div className="text-gray-700 space-y-4">
              <p>
                Du hast Fragen zur Mitgliedschaft, zum Training oder möchtest Teil der Young Lions werden?
                Schreib uns einfach oder komm vorbei!
              </p>
              <div>
                <p className="font-bold text-red-700">TSV Calw – Abteilung Basketball</p>
                <p>Bahnhofstraße 95<br />75365 Calw</p>
              </div>
              <div>
                <p className="font-bold">E-Mail:</p>
                <a href="mailto:basketball@tsvcalw.de" className="text-red-700 hover:underline">
                  basketball@tsvcalw.de
                </a>
              </div>
              <div>
                <p className="font-bold">Ansprechpartner:</p>
                <p>René Heller (Abteilungsleiter)</p>
              </div>
              <div>
                <a
                    href="https://maps.google.com/?q=TSV+Calw+Basketball"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-600 hover:underline"
                >
                  ➔ Anfahrt bei Google Maps
                </a>
              </div>
            </div>

            {/* Formspree-Formular */}
            {submitted ? (
                <div className="text-green-700 font-medium text-center">
                  ✅ Vielen Dank! Deine Nachricht wurde gesendet.
                </div>
            ) : (
                <form
                    action="https://formspree.io/f/xovljrbk"
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
                    className="space-y-4"
                >
                  {/* ...Inputs wie Name, E-Mail, Nachricht */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">E-Mail</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nachricht</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>
                  <div className="text-sm text-gray-600">
                    Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäß unserer
                    <a href="/impressum" className="text-red-700 ml-1 hover:underline">Datenschutzerklärung</a> einverstanden.
                  </div>
                  <button
                      type="submit"
                      className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-600 transition"
                  >
                    Nachricht senden
                  </button>
                </form>
            )}
          </div>
        </div>
      </div>
  );
}