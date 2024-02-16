import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";


i18n.init({
  interpolation: {escapeValue: false},
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  },
  lng: "en",
  fallbackLng: "en",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

