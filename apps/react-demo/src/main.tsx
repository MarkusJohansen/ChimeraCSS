import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Add ChimeraCSS stylesheet
const stylesheet = document.createElement('link')
stylesheet.id = 'stylesheet'
stylesheet.rel = 'stylesheet'
stylesheet.type = 'text/css'
stylesheet.href = 'https://unpkg.com/chimeracss/build/chimera.css'
document.head.appendChild(stylesheet)

// Add demo-specific styles
const style = document.createElement('style')
style.textContent = `
  main {
    max-width: 50%;
    margin: auto;
    padding: 1em;
  }

  @media screen and (max-width: 800px) {
    main {
      max-width: 90%;
    }
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
