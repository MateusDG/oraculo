import { collection, addDoc } from 'firebase/firestore'
import { db } from './db.js'

export async function insertTestData() {
  const data = {
    nome: 'Teste',
    valor: 123,
    timestamp: Date.now(),
  }
  try {
    await addDoc(collection(db, 'testes'), data)
    console.log('Dados inseridos com sucesso!')
  } catch (err) {
    console.error('Erro ao inserir dados:', err)
  }
}