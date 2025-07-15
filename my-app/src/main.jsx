import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import  {TimeProvider} from './Context/TimerContext.jsx'
import  { Toaster } from 'react-hot-toast';
import {  TimeProvider2 } from './Context/Timer2Context.jsx'
import {  ThemeProvider } from './Context/TheamContext.jsx'
import {  AuthProvider } from './Context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <TimeProvider>
    <TimeProvider2>
      <ThemeProvider>
        <AuthProvider>
    <App />
    <Toaster />
    </AuthProvider>
    </ThemeProvider>
    </TimeProvider2>
    </TimeProvider>
  </BrowserRouter>,
)
