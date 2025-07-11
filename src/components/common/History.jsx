import React from 'react'
import { decks } from '../../data/decks.js'

export default function History({ records, onBack }) {
  return (
    <div className="bg-white/80 rounded-2xl shadow-xl p-6">
      <button onClick={onBack} className="text-sm text-gray-700 hover:underline mb-4">&larr; Voltar</button>
      <h2 className="text-xl font-bold mb-4">Histórico de Leituras</h2>

      {records.length === 0 && <p className="text-gray-600">Nenhuma leitura ainda.</p>}
      <ul className="space-y-4">
        {records.map((rec, idx) => {
          const deck = decks.find(d => d.id === rec.deckId)
          return (
            <li key={idx} className="p-4 bg-gray-100 rounded">
              <p className="text-sm text-gray-500">
                {new Date(rec.timestamp).toLocaleString()} — <strong>{deck?.name}</strong>
              </p>
              <div className="flex items-center mt-2">
                <img src={rec.card.image} alt={rec.card.name} className="h-12 mr-3" />
                <div>
                  <p><strong>{rec.card.name}</strong></p>
                  <p className="text-gray-700 text-sm">{rec.card.meaning}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}