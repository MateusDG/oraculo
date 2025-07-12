// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Se for usar Analytics
// import { getAuth } from "firebase/auth"; // Se for usar Autenticação
import { getFirestore } from "firebase/firestore"; // serverTimestamp removido daqui, pois é importado onde é usado (CosmicMessageForm)


const firebaseConfig = {
  apiKey: 'AIzaSyAemgkd02qf8_dszAth5cKZ8b1NTLUpUBo',
  authDomain: 'ihcoraculo.firebaseapp.com',
  projectId: 'ihcoraculo',
  storageBucket: 'ihcoraculo.firebasestorage.app',
  messagingSenderId: '735031336039',
  appId: '1:735031336039:web:7dbcbe02a3c511cfc988c2',
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar outros serviços do Firebase que você for usar e exportá-los
// const analytics = getAnalytics(app); // Exemplo
// export const auth = getAuth(app); // Exemplo
export const db = getFirestore(app); // Exemplo para Firestore

// Exportar o app inicializado pode ser útil em alguns casos, mas geralmente se exporta os serviços
export default app;

// Log para confirmar a inicialização (apenas para desenvolvimento)
console.log("Firebase initialized with project ID:", firebaseConfig.projectId);
