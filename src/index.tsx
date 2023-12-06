import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './Application';
import reportWebVitals from './reportWebVitals';
import { IsClickedProvider } from './context/IsClickedContext';
import { AuthProvider } from './hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <AuthProvider>
            <IsClickedProvider>
                <Application />
            </IsClickedProvider>
        </AuthProvider>
    </BrowserRouter>
);

reportWebVitals();
