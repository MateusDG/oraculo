import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../db.js'

export default function TestForm({ onAdd }) {
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = { nome, valor: Number(valor), timestamp: Date.now() }
    const ref = await addDoc(collection(db, 'testes'), data)
    setNome('')
    setValor('')
    if (onAdd) onAdd({ id: ref.id, ...data })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome"
        className="p-2 rounded border w-full"
      />
      <input
        type="number"
        value={valor}
        onChange={e => setValor(e.target.value)}
        placeholder="Valor"
        className="p-2 rounded border w-full"
      />
      <button type="submit" className="bg-accent text-white px-4 py-2 rounded">
        Salvar
      </button>
    </form>
  )
}