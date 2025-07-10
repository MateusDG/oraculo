import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, saveUser } from '../db.js'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSignUp(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: name })
      await saveUser({ ...cred.user, displayName: name })
      setSuccess(true)
    } catch (err) {
      console.error('Erro ao criar conta:', err)
      setError('Falha ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
      <div className="bg-white/10 backdrop-blur p-8 rounded-lg w-80 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-2">Criar Conta</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
            className="p-2 rounded text-black"
          />
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
            {loading ? 'Criando...' : 'Criar Conta'}
          </button>
        </form>
        {error && <p className="text-sm text-red-300 text-center">{error}</p>}
        {success && <p className="text-sm text-green-300 text-center">Conta criada com sucesso!</p>}
        <Link to="/" className="text-sm underline text-center mt-2">
          Voltar ao login
        </Link>
      </div>
    </div>
  )
}