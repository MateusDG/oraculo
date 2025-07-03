import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../db.js'

export default function Login() {
  async function handleLogin() {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (err) {
      console.error('Erro no login:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Entrar com Google
      </button>
    </div>
  )
}