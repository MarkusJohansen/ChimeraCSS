import { createApp } from 'vue'
import App from './App.vue'

// Add ChimeraCSS stylesheet
const stylesheet = document.createElement('link')
stylesheet.id = 'stylesheet'
stylesheet.rel = 'stylesheet'
stylesheet.type = 'text/css'
stylesheet.href = 'https://unpkg.com/chimeracss/build/chimera.css'
document.head.appendChild(stylesheet)

createApp(App).mount('#app')
