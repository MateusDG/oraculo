import React, { useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth, saveUser } from '../db.js'
import { Link } from 'react-router-dom'
import { GiCrystalBall } from 'react-icons/gi'

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

  async function loginWithEmail(e: React.FormEvent) {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-indigo-900 to-black font-serif text-white">
      <div className="relative bg-black/50 backdrop-blur-md p-8 rounded-xl w-96 shadow-xl">
        <GiCrystalBall className="absolute -top-8 left-1/2 -translate-x-1/2 text-gold text-5xl drop-shadow-lg" />
        <h1 className="text-3xl tracking-widest font-semibold text-center mb-6">Oráculo</h1>
        <form onSubmit={loginWithEmail} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-light">E-mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded text-black"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-light">Senha</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded text-black"
            />
          </label>
          <button
            type="submit"
            className="bg-accent hover:bg-accent/80 text-white font-bold py-2 rounded transition"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <button
          onClick={loginWithGoogle}
          className="mt-3 w-full px-4 py-2 bg-white text-primary font-bold rounded hover:bg-gray-100 transition"
          disabled={loading}
        >
          Entrar com Google
        </button>
        {error && <p className="text-sm text-red-300 text-center mt-2">{error}</p>}
        <div className="mt-4 flex flex-col items-center gap-1 text-sm">
          <Link to="#" className="underline">Esqueceu sua senha?</Link>
          <Link to="/cadastro" className="underline">Criar conta</Link>
        </div>
      </div>
    </div>
  )
}
