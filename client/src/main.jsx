import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BlogContext from './context/BlogContext.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BlogContext>
      <App />
    </BlogContext>,
  </BrowserRouter>
)
