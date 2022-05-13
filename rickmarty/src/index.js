/* 
    ------------------------------------------
    Nombre del proyecto: BeMaster - Prueba ingreso
    Desarrollador: John Wilmer Chavarro Urrea
    Version: 0.1.1
    Fecha inicio: 10/05/2022
    ------------------------------------------
*/

import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

);



