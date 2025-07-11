import React, { useEffect, useState } from 'react'
import { fetchTestData } from '../select.js'
import TestForm from './TestForm.jsx'

export default function TestList() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function load() {
      const data = await fetchTestData()
      setItems(data)
    }
    load()
  }, [])

  function handleAdd(item) {
    setItems(prev => [item, ...prev])
  }

  return (
    <div className="bg-white/80 rounded-2xl shadow-xl p-4 mb-6">
      <h2 className="text-lg font-bold mb-2">Dados do Firebase</h2>
      <TestForm onAdd={handleAdd} />
      <ul className="list-disc list-inside space-y-1">
        {items.map(item => (
          <li key={item.id} className="text-sm text-gray-700">
            {item.nome} — {item.valor}
          </li>
        ))}
      </ul>
    </div>
  )
}
