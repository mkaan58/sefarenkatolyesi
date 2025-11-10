import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS importu
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // YENİ İMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);