import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {LanguageProvider} from "./lang/LangContext.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LanguageProvider>
          <App />
      </LanguageProvider>
  </StrictMode>,
)
