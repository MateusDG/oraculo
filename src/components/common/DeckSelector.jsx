import React from 'react'

export default function DeckSelector({ decks, onSelect }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Escolha seu Oráculo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {decks.map(d => (
          <div
            key={d.id}
            className="card cursor-pointer flex flex-col justify-between"
            onClick={() => onSelect(d)}
          >
            <div>
              <h2 className="text-2xl font-semibold text-center mb-2">{d.name}</h2>
              <p className="text-sm text-gray-600 text-center mb-4">{d.description}</p>
            </div>
            <p className="text-center text-accent font-medium">{d.cards.length} cartas</p>
          </div>
        ))}
      </div>
    </div>
  )
}