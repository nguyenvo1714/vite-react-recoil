import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import './assets/styles/main.scss'
import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "./theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
          </BrowserRouter>
        </React.Suspense>
      </ThemeProvider>
    </React.StrictMode>
  </RecoilRoot>
)
