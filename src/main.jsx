import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// SEO — set document title
document.title = 'Andrew Ehab | .NET Full Stack Developer';

// SEO — meta description
const meta = document.createElement('meta');
meta.name = 'description';
meta.content =
  'Andrew Ehab — .NET Full Stack Developer from Cairo, Egypt. Building scalable web apps with ASP.NET Core, React, and TypeScript.';
document.head.appendChild(meta);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
