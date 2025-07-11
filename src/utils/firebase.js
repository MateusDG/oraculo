// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Se for usar Analytics
// import { getAuth } from "firebase/auth"; // Se for usar Autenticação
import { getFirestore } from "firebase/firestore"; // serverTimestamp removido daqui, pois é importado onde é usado (CosmicMessageForm)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !! IMPORTANTE: SUBSTITUA AS CREDENCIAIS ABAIXO PELAS DO SEU PROJETO FIREBASE !!
// !! ESTAS SÃO APENAS PLACEHOLDERS E NÃO FUNCIONARÃO.                       !!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE_REPLACE_ME",
  authDomain: "YOUR_PROJECT_ID_REPLACE_ME.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID_REPLACE_ME",
  storageBucket: "YOUR_PROJECT_ID_REPLACE_ME.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_REPLACE_ME",
  appId: "YOUR_APP_ID_REPLACE_ME",
  measurementId: "YOUR_MEASUREMENT_ID_REPLACE_ME" // Opcional
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
