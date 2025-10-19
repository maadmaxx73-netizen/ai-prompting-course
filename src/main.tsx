import React from 'react';
import ReactDOM from 'react-dom/client';
import Site from './site';
import './index.css';

// Create the root element and render the Site component.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
);
