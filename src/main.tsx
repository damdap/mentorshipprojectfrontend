import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ShopContextProvider from './context/ShopContext';
import ErrorBoundary from './components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <AuthProvider>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </AuthProvider>
</BrowserRouter>
);
