import { collection, getDocs } from 'firebase/firestore'
import { db } from './db.js'

export async function fetchTestData() {
  const snap = await getDocs(collection(db, 'testes'))
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}