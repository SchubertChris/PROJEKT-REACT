import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/jsx/Navbar'
import KurzEinleitung from './assets/components/jsx/KurzEinleitung'
import About from './assets/components/jsx/About.jsx'
import Kontakt from './assets/components/jsx/Kontakt.jsx'
import Galerie from './assets/components/jsx/Galerie.jsx'

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
          <main>
        <Routes>
          <Route path="/" element={<KurzEinleitung />} />
          <Route path="/about" element={<About />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        </main>
      </Router>
    </>
  )
}


