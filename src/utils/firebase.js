// Importar as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Se for usar Analytics
// import { getAuth } from "firebase/auth"; // Se for usar Autenticação
import { getFirestore } from "firebase/firestore"; // Se for usar Firestore

// TODO: Adicionar a configuração do seu projeto Firebase aqui
// Essas são chaves de EXEMPLO e NÃO FUNCIONARÃO. Substitua pelas suas.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE", // Substitua
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // Substitua
  projectId: "YOUR_PROJECT_ID", // Substitua
  storageBucket: "YOUR_PROJECT_ID.appspot.com", // Substitua
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Substitua
  appId: "YOUR_APP_ID", // Substitua
  measurementId: "YOUR_MEASUREMENT_ID" // Opcional, para Google Analytics
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
