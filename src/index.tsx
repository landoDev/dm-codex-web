import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom"
import ErrorPage from './error-pages';
import SessionPage from './pages/session';
import HomePage from './pages/homepage';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path:"/session",
        element: <SessionPage />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
    // TODO: ENV var these
        domain="dev-5p-n1lpz.us.auth0.com"
        clientId="dCd6ycQP6AufRk4drrmaA2TVJZBfGT8v"
        authorizationParams={{
          redirect_uri: "http://localhost:3000/dashboard"
        }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
