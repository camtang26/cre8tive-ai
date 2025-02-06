import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;
const isSSR = window.location.search.includes('?_escaped_fragment_=');
const isReactSnap = navigator.userAgent.includes('ReactSnap');

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Handle SSR hydration and react-snap prerendering
if (rootElement.hasChildNodes() || isSSR || isReactSnap) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

// Support for react-snap
export const snapSaveState = () => {
  return {
    __REACT_QUERY_STATE__: undefined // Prevent react-query state serialization
  };
};
