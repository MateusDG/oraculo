import React, { useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth, saveUser } from '../db.js'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loginWithGoogle() {
    setLoading(true)
    setError('')
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      await saveUser(result.user)
    } catch (err) {
      console.error('Erro no login:', err)
      setError('Falha ao entrar com Google')
    } finally {
      setLoading(false)
    }
  }

  async function loginWithEmail(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      await saveUser(cred.user)
    } catch (err) {
      console.error('Erro no login:', err)
      setError('E-mail ou senha inválidos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
      <div className="bg-white/10 backdrop-blur p-8 rounded-lg w-80 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-2">Bem-vindo</h1>
        <form onSubmit={loginWithEmail} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="E-mail"
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
          <button
            type="submit"
            className="bg-accent text-white font-bold py-2 rounded hover:bg-accent/90 transition"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <button
          onClick={loginWithGoogle}
          className="px-4 py-2 bg-white text-primary font-bold rounded hover:bg-gray-100 transition"
          disabled={loading}
        >
          Entrar com Google
        </button>
        {error && <p className="text-sm text-red-300 text-center">{error}</p>}
        <Link to="/cadastro" className="text-sm underline text-center mt-2">
          Criar conta
        </Link>
      </div>
    </div>
  )
}