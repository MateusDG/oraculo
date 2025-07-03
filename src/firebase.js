import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAemgkd02qf8_dszAth5cKZ8b1NTLUpUBo',
  authDomain: 'ihcoraculo.firebaseapp.com',
  projectId: 'ihcoraculo',
  storageBucket: 'ihcoraculo.firebasestorage.app',
  messagingSenderId: '735031336039',
  appId: '1:735031336039:web:7dbcbe02a3c511cfc988c2'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)