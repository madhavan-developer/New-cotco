import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './assets/css/main.css'
import './assets/css/service.css'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
