import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageEditor from './PageEditor';
import GeneratedView from './GeneratedView';
import { serverSideRoutes } from 'Frontend/generated/flow/Flow';

const routes = [
  ...serverSideRoutes,
  { path: '/editor', element: <PageEditor /> },
  { path: '/page/:slug', element: <GeneratedView /> },
];

const router = createBrowserRouter([...routes], {
  basename: new URL(document.baseURI).pathname,
});

createRoot(document.getElementById('outlet')!).render(
  <RouterProvider router={router} />
);

