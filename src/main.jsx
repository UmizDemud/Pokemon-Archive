import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { ContextProvider } from './components/AppContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
)
