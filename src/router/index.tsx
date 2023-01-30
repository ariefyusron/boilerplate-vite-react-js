import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/login'));
const OtpPage = lazy(() => import('../pages/otp'));
const HomePage = lazy(() => import('../pages/home'));

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'login',
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          {
            path: 'otp',
            element: <OtpPage />,
          },
        ],
      },
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
