import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/* Was passiert hier? 

In diesem Snippet wird die React-Root-API verwendet, um die App-Komponente zu rendern.
Die createRoot-Funktion wird verwendet, um eine neue Root-Instanz zu erstellen, die die App-Komponente rendert.

*/