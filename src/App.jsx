import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/jsx/Navbar'
import KurzEinleitung from './components/jsx/KurzEinleitung'
import About from './components/jsx/About.jsx'
import Kontakt from './components/jsx/Kontakt.jsx'
import Galerie from './components/jsx/Galerie.jsx'

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


