import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import SpreadSelector from './SpreadSelector.jsx'

export default function CardReader({ deck, spread, onChangeSpread, onBack, onHistory, onAddRecord }) {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState(false)

  function draw() {
    const chosen = []
    const copy = [...deck.cards]
    for(let i=0;i<spread;i++){
      const idx=Math.floor(Math.random()*copy.length)
      chosen.push(copy.splice(idx,1)[0])
    }
    setFlipped(false)
    setCards(chosen)
    onAddRecord({ deckId:deck.id, cards:chosen, timestamp:new Date().toISOString() })
    setTimeout(()=>{
      setFlipped(true)
      confetti({ particleCount:100, spread:70, origin:{ y:0.6 } })
    },300)
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex justify-between mb-4">
        <button onClick={onBack} className="text-sm text-primary hover:underline">&larr; Home</button>
        <button onClick={onHistory} className="text-sm text-primary hover:underline">Histórico</button>
      </div>

      <h2 className="text-3xl font-bold text-center text-primary mb-4">{deck.name}</h2>
      <SpreadSelector options={[1,3,5]} selected={spread} onSelect={onChangeSpread} />

      <button onClick={draw} className="button-ripple block mx-auto mb-6 bg-accent text-white px-8 py-3 rounded-full shadow-lg hover:bg-primary transition">
        Girar {spread} Carta{spread>1?'s':''}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cards.map((c,i)=>(
          <Motion.div key={i} className="relative h-48 perspective"
            initial={{ rotateY:0 }} animate={{ rotateY: flipped?180:0 }} transition={{ duration:0.6, delay:i*0.2 }}>
            <img src="/cards/back.png" alt="verso" className="absolute w-full h-full rounded-2xl backface-hidden" />
            <img src={c.image} alt={c.name} className="absolute w-full h-full rounded-2xl backface-hidden" style={{ transform:'rotateY(180deg)' }} />
          </Motion.div>
        ))}
      </div>

      {flipped && cards.length>0 && (
        <div className="mt-6 space-y-4">
          {cards.map((c,i)=>(
            <div key={i} className="bg-white p-4 rounded-2xl shadow card-preview">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-gray-700 text-sm mt-1">{c.meaning}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}