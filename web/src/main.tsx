import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { customTheme } from './theme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
