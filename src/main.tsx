import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Optional analytics (Plausible) and error tracking (Sentry) initialization.
// Configure the following environment variables in Vite/GitHub Actions when enabling:
// VITE_PLAUSIBLE_DOMAIN, VITE_SENTRY_DSN
if ((import.meta as any).env?.VITE_PLAUSIBLE_DOMAIN) {
  const domain = (import.meta as any).env.VITE_PLAUSIBLE_DOMAIN;
  const s = document.createElement('script');
  s.async = true;
  s.defer = true;
  s.setAttribute('data-domain', domain);
  s.src = 'https://plausible.io/js/plausible.js';
  document.head.appendChild(s);
}

if ((import.meta as any).env?.VITE_SENTRY_DSN) {
  try {
    // Lazy-load Sentry to avoid bundling it when not configured
    const { init } = await import('@sentry/browser');
    init({ dsn: (import.meta as any).env.VITE_SENTRY_DSN });
  } catch (e) {
    // ignore if import fails in environments where Sentry isn't available
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
