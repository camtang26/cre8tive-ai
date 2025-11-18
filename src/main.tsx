import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/outfit/900.css' // Black weight for headlines
import 'lenis/dist/lenis.css' // Lenis smooth scroll styles
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root container element not found')
}

if (!window.__cre8tiveRoot) {
  window.__cre8tiveRoot = createRoot(container)
}

window.__cre8tiveRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
)
