import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material'
import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  shape: { borderRadius: 12 },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
)
