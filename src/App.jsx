import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import DeckSelector from './components/DeckSelector.jsx'
import CardReader from './components/CardReader.jsx'
import History from './components/History.jsx'
import CardOfDay from './components/CardOfDay.jsx'
import { decks } from './data/decks.js'

export default function App() {
  const [view, setView] = useState('home') // 'home','read','history'
  const [deck, setDeck] = useState(null)
  const [spread, setSpread] = useState(1)
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('oraculoHistory')||'[]')
    setHistory(saved)
  }, [])

  function addRecord(record) {
    const updated = [record, ...history]
    setHistory(updated)
    localStorage.setItem('oraculoHistory', JSON.stringify(updated))
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {view === 'home' && (
        <Motion.div key="home" className="pt-8"
          initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.5 }}>
          <CardOfDay decks={decks} />
          <DeckSelector decks={decks} onSelect={d=>{setDeck(d);setView('read')}} />
        </Motion.div>
      )}

      {view === 'read' && (
        <Motion.div key="read"
          initial={{ x:300, opacity:0 }} animate={{ x:0, opacity:1 }} exit={{ x:-300, opacity:0 }} transition={{ duration:0.4 }}>
          <CardReader
            deck={deck}
            spread={spread}
            onChangeSpread={(s)=>setSpread(s)}
            onBack={()=>setView('home')}
            onHistory={()=>setView('history')}
            onAddRecord={addRecord}
          />
          </Motion.div>
      )}

      {view === 'history' && (
        <Motion.div key="history" className="pt-8"
          initial={{ y:50, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:-50, opacity:0 }} transition={{ duration:0.3 }}>
          <History records={history} onBack={()=>setView('home')} />
        </Motion.div>
      )}
    </AnimatePresence>
  )
}