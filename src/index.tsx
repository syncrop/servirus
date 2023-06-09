import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Cookies from './components/pages/Cookies';
import Servicios from './components/pages/servicios/Servicios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/servicios/:servicio/:tipo/:subtipo',
    element: <Servicios />
  },
  {
    path: '/servicios/:servicio/:tipo',
    element: <Servicios />
  },
  {
    path: '/cookies',
    element: <Cookies />
  },
  {
    path: '*',
    element: <App />
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
