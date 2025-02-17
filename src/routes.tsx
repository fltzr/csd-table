import { type RouteObject, createBrowserRouter, Navigate } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('./common/components/root-layout/root-layout'),
    children: [
      {
        index: true,
        lazy: () => import('./pages/home'),
        handle: {
          crumb: 'home',
        },
      },
      {
        path: 'settings',
        lazy: () => import('./pages/settings/settings'),
        handle: {
          crumb: 'Settings',
        },
        children: [
          {
            index: true,
            element: <Navigate replace to='/settings/profile' />,
          },
          {
            path: 'profile',
            lazy: () => import('./pages/settings/profile'),
          },
          {
            path: 'security',
            lazy: () => import('./pages/settings/security'),
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
