import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, saveUser } from '../db.js'
import { Link } from 'react-router-dom'

export default function Login() {
  async function handleLogin() {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      await saveUser(result.user)
    } catch (err) {
      console.error('Erro no login:', err)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary to-accent text-white">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Entrar com Google
      </button>
      <Link to="/cadastro" className="underline text-sm">
        Criar conta
      </Link>
    </div>
  )
}