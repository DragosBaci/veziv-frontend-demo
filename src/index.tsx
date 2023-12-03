import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import { IsClickedProvider } from './context/IsClickedContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <IsClickedProvider>
            <Application />
        </IsClickedProvider>
    </React.StrictMode>
);

reportWebVitals();
