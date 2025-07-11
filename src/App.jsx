import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore'
import { Routes, Route, Link } from 'react-router-dom'
import DeckSelector from './components/DeckSelector.jsx'
import CardReader from './components/CardReader.jsx'
import History from './components/History.jsx'
import CardOfDay from './components/CardOfDay.jsx'
import { decks } from './data/decks.js'
import { db } from './db.js'
import TestList from './components/TestList.jsx'
import Entrada from './Entrada/entrada.jsx'
import Sobre from './Sobre/sobre.jsx'

function Home() {
  const [view, setView] = useState('home')
  const [deck, setDeck] = useState(null)
  const [spread, setSpread] = useState(1)
  const [history, setHistory] = useState([])

  useEffect(() => {
    async function fetchHistory() {
      const q = query(collection(db, 'history'), orderBy('timestamp', 'desc'))
      const snap = await getDocs(q)
      setHistory(snap.docs.map(d => d.data()))
    }
    fetchHistory()
  }, [])

  async function addRecord(record) {
    const data = { ...record }
    await addDoc(collection(db, 'history'), data)
    setHistory(prev => [data, ...prev])
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {view === 'home' && (
        <Motion.div
          key="home"
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardOfDay decks={decks} />
          <DeckSelector decks={decks} onSelect={d => { setDeck(d); setView('read') }} />
          <TestList />
        </Motion.div>
      )}

      {view === 'read' && (
        <Motion.div
          key="read"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <CardReader
            deck={deck}
            spread={spread}
            onChangeSpread={s => setSpread(s)}
            onBack={() => setView('home')}
            onHistory={() => setView('history')}
            onAddRecord={addRecord}
          />
        </Motion.div>
      )}

      {view === 'history' && (
        <Motion.div
          key="history"
          className="pt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <History records={history} onBack={() => setView('home')} />
        </Motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div>
      <nav className="p-4 flex gap-4 bg-gray-100 items-center">
        <Link to="/">Home</Link>
        <Link to="/entrada">Entrada</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrada" element={<Entrada />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  )

}