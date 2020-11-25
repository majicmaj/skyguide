import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
const navigateFallbackBlacklist = [
  "^/.netlify",
  "^/_",
  "/[^/?]+\\.[^/]+$"
]
const isNetlifyRoute = () => {
  const path = window.location.pathname
  navigateFallbackBlacklist.forEach(regex => {
    if (path.match(regex)) return true
  })
  return false
}

if (isNetlifyRoute()) {
  console.info('unregistering service worker for admin route')
  serviceWorker.unregister()
  console.info('reloading')
  window.location.reload()
}
