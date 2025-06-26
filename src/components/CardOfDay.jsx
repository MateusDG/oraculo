import React, { useState, useEffect } from 'react'
import { decks } from '../data/decks.js'

function randomCard(deck){ return deck.cards[Math.floor(Math.random()*deck.cards.length)] }

export default function CardOfDay({ decks }) {
  const [card, setCard] = useState(null)

  useEffect(()=>{
    const today = new Date().toDateString()
    const saved = JSON.parse(localStorage.getItem('oraculoDay')||'{}')
    if(saved.date===today) setCard(saved.card)
    else{
      const d=decks[Math.floor(Math.random()*decks.length)]
      const c=randomCard(d)
      setCard(c)
      localStorage.setItem('oraculoDay', JSON.stringify({ date:today, card:c }))
    }
  },[])

  if(!card) return null
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-4 mb-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Carta do Dia</h2>
      <img src={card.image} alt={card.name} className="mx-auto h-40 mb-4" />
      <p className="italic text-gray-700">"{card.meaning}"</p>
    </div>
  )
}