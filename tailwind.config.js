/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c4d7d", // Roxo existente, bom para a temática
        secondary: "#f3e8ff", // Lilás claro existente, bom para fundos suaves
        accent: "#8b5cf6", // Roxo vibrante existente, bom para destaques
        deepPurple: '#483D8B',
        mysticBlue: '#27408B',
        goldAccent: '#FFD700', // Dourado mais vibrante
        earthyBrown: '#8B4513',
        darkBg: '#1a1a2e', // Para fundos escuros, se necessário
        lightText: '#e0e0e0', // Para texto em fundos escuros
        // Mantendo 'gold' original caso esteja em uso, mas priorizando 'goldAccent'
        gold: "#d4af37",
      },
      fontFamily: {
        title: ['Cinzel Decorative', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
