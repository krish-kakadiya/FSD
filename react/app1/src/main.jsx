import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pract from './component/Pract.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pract/>
  </StrictMode>,
);
