import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Seu componente App principal
import OracleApp from './OracleApp.jsx'; // O novo componente raiz da refatoração
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Importa o reset CSS do Ant Design
import './styles/index.css'; // Seus estilos globais, incluindo @font-face e Tailwind
// import './utils/db.js'; // Firebase init, será chamado de dentro do OracleApp ou utils/firebase.js

// Definição do tema customizado para Ant Design
const antdTheme = {
  token: {
    colorPrimary: '#FFC107',        // accent-gold: Usado para botões primários, links ativos, etc.
    colorInfo: '#4A00E0',           // primary-medium: Usado para elementos informativos.
    colorSuccess: '#69C02C',        // Verde vibrante para sucesso (ajustado para melhor visibilidade em tema escuro)
    colorWarning: '#FAAD14',        // Laranja para avisos
    colorError: '#FF4D4F',          // Vermelho para erros

    colorTextBase: '#F0E6FF',        // text-light: Cor base para texto.
    colorTextSecondary: '#A094B7',   // text-muted: Cor para texto secundário, placeholders.
    colorTextTertiary: 'rgba(240, 230, 255, 0.45)', // text-light com opacidade
    colorTextQuaternary: 'rgba(240, 230, 255, 0.25)',// text-light com mais opacidade

    colorBgBase: '#12002b',          // dark-bg: Fundo de elementos como inputs, selects. (DEVE SER O MAIS ESCURO)
    colorBgContainer: '#2C005E',     // primary-dark: Fundo para containers (Cards, Modals).
    colorBgLayout: '#0A001F',        // Um tom ainda mais escuro para o layout geral da página.
    colorBgElevated: '#3c0080',      // Um roxo um pouco mais claro para superfícies elevadas (Dropdowns, Popovers).

    colorBorder: '#FFC107',          // accent-gold: Cor para bordas primárias ou de destaque.
    colorBorderSecondary: 'rgba(74, 0, 224, 0.5)', // primary-medium com opacidade: Bordas secundárias.

    fontFamily: "'Montserrat', sans-serif", // Fonte principal para a UI do AntD.
    fontSize: 15,                    // Tamanho base da fonte (um pouco maior que o padrão 14px).

    borderRadius: 8,                 // Bordas mais arredondadas.
    controlHeight: 40,               // Altura para botões e inputs.
    // boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35)", // Sombra mais pronunciada para elementos elevados.
  },
  components: {
    Button: {
      colorPrimary: '#FFC107',              // Fundo do botão primário (accent-gold)
      colorPrimaryHover: '#FFD54F',           // Hover do botão primário (accent-gold-light)
      colorPrimaryActive: '#FFA000',          // Active do botão primário (dourado mais escuro)
      colorTextPrimary: '#2C005E',            // Texto do botão primário (primary-dark para contraste)

      defaultBg: 'rgba(74, 0, 224, 0.6)',    // Botão default (primary-medium com transparência)
      defaultColor: '#F0E6FF',               // text-light
      defaultHoverBg: 'rgba(74, 0, 224, 0.8)',// primary-medium mais opaco no hover
      defaultHoverColor: '#FFFFFF',
      defaultBorderColor: 'rgba(74, 0, 224, 0.8)', // primary-medium

      // Para botões com font-heading (Cinzel Decorative), aplicar via className + CSS customizado
      // pois misturar fontes no tema de botão pode ser complexo e afetar outros botões.
      borderRadius: 6, // Raio de borda específico para botões
      // fontWeight: 'bold', // Já é negrito por padrão para primary
    },
    Menu: { // Configuração para o componente Menu, se usado no Header
      colorItemText: '#A094B7',              // text-muted
      colorItemTextHover: '#F0E6FF',         // text-light
      colorItemTextSelected: '#FFC107',      // accent-gold
      colorItemBg: 'transparent',            // Fundo transparente por padrão
      colorItemBgHover: 'rgba(74, 0, 224, 0.3)',// primary-medium com transparência
      colorItemBgSelected: 'rgba(44, 0, 94, 0.5)',// primary-dark com transparência
      // Para temas escuros do AntD, se houver um modo "dark" explícito
      darkItemBg: 'transparent',
      darkItemColor: '#A094B7',
      darkItemHoverColor: '#F0E6FF',
      darkItemSelectedColor: '#FFC107',
      darkSubMenuItemBg: '#12002b',
    },
    // Adicionar customizações para outros componentes AntD conforme necessário:
    // Input, Select, Modal, Card, Tooltip, etc.
    // Ex:
    // Input: {
    //   colorBgContainer: 'rgba(44, 0, 94, 0.3)', // primary-dark com transparência
    //   colorBorder: 'rgba(255, 193, 7, 0.5)', // accent-gold com transparência
    //   hoverBorderColor: '#FFC107',
    // }
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      {/* <App />  // Comentando o App antigo */}
      <OracleApp /> {/* Usando o novo OracleApp como raiz da UI refatorada */}
    </ConfigProvider>
  </React.StrictMode>
);
// Nota: BrowserRouter será configurado dentro de OracleApp.jsx
