import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';

const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(<Root />);
