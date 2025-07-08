import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, saveUser } from '../db.js'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignUp(e) {
    e.preventDefault()
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await saveUser(cred.user)
    } catch (err) {
      console.error('Erro ao criar conta:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-2 rounded text-black"
        />
        <button type="submit" className="px-6 py-3 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition">
          Criar Conta
        </button>
        <Link to="/" className="text-center text-sm underline mt-2">
          Voltar ao login
        </Link>
      </form>
    </div>
  )
}