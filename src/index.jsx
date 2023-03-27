import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "primeflex/primeflex.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                 
import "primeicons/primeicons.css";
window.React = React;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);