import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAemgkd02qf8_dszAth5cKZ8b1NTLUpUBo',
  authDomain: 'ihcoraculo.firebaseapp.com',
  projectId: 'ihcoraculo',
  storageBucket: 'ihcoraculo.firebasestorage.app',
  messagingSenderId: '735031336039',
  appId: '1:735031336039:web:7dbcbe02a3c511cfc988c2',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export async function saveUser(user) {
  if (!user) return
  const ref = doc(db, 'users', user.uid)
  await setDoc(
    ref,
    {
      uid: user.uid,
      name: user.displayName || '',
      email: user.email || '',
    },
    { merge: true }
  )
}