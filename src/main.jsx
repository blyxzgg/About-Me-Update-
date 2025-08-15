import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./theme/ThemeContext"
import App from './App.jsx'
import "./assets/style/main.css"
import "./assets/style/media.css"

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
