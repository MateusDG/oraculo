/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Garante que todos os arquivos relevantes sejam escaneados
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2C005E',    // Roxo Profundo / Índigo Escuro
        'primary-medium': '#4A00E0', // Roxo Vibrante
        'accent-gold': '#FFC107',     // Dourado Âmbar Vibrante
        'accent-gold-light': '#FFD54F',// Dourado Âmbar mais claro (para hovers/sutilezas)
        'text-light': '#F0E6FF',      // Branco levemente lavanda (para texto principal em fundos escuros)
        'text-muted': '#A094B7',      // Cinza/Lavanda suave (para texto secundário ou placeholders)
        'dark-bg': '#12002b',         // Um fundo ainda mais escuro e temático que o #1a1a2e
        // Adicionando um roxo intermediário para gradientes ou elementos de UI
        'mid-purple': '#7F00FF',      // Violeta
      },
      fontFamily: {
        heading: ['Cinzel Decorative', 'serif'], // Para títulos e elementos de grande destaque
        body: ['Inter', 'sans-serif'],           // Fonte moderna e limpa para corpo de texto e UI
      },
      // Adicionando alguns efeitos de sombra mais sofisticados
      boxShadow: {
        'glow-gold': '0 0 15px 5px rgba(255, 193, 7, 0.4)', // Efeito de brilho dourado
        'glow-purple': '0 0 15px 5px rgba(74, 0, 224, 0.4)',  // Efeito de brilho roxo
        'inner-deep': 'inset 0 4px 10px rgba(0,0,0,0.5)', // Sombra interna profunda
      },
      // Adicionando animações de keyframes para elementos sutis
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: { // Para um brilho pulsante sutil
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(255, 193, 7, 0.3)' },
          '50%': { boxShadow: '0 0 18px 6px rgba(255, 193, 7, 0.5)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        pulseGlow: 'pulseGlow 3s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}
