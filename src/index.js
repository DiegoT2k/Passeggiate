import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Contatti from './components/contatti';
import Lago from './components/lago';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/0",
    element:<Lago></Lago>
  },
  {
    path:"/1",
    element:<Lago></Lago>
  },
  {
    path:"/2",
    element:<Lago></Lago>
  },
  {
    path:"/3",
    element:<Lago></Lago>
  },
  {
    path:"/contatti",
    element:<Contatti></Contatti>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();