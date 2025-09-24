import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BranchLayout from '../layout/BranchLayout';
import Layout from '../layout/Layout';

// Error pages
// import AccessDenied from '@/pages/Error/AccessDenied';
// import InternalServerError from '@/pages/Error/InternalServerError';
// import NotFound from '@/pages/Error/NotFound';
// import ServiceUnavailable from '@/pages/Error/ServiceUnavailable';
// import Unauthorized from '@/pages/Error/Unauthorized';

// Public pages
const PublicHome = lazy(() => import('@/pages/public/PublicHome/PublicHome'));

// Private pages for EventLayout
const Hello = lazy(() => import('@/pages/private/Layout/Home/HomePrivate'));

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public routes with spinner fallback */}
        <Route
          element={
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          }
        >
          {/* Public routes - no layout */}
          <Route path='/' element={<PublicHome />} />

          {/* Error pages */}
          {/* <Route path='/access-denied' element={<AccessDenied />} />
          <Route path='/internal-server-error' element={<InternalServerError />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/service-unavailable' element={<ServiceUnavailable />} />
          <Route path='/unauthorized' element={<Unauthorized />} /> */}
        </Route>

        {/* Private routes with null fallback (to prevent double loading) */}
        <Route
          element={
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          }
        >
          {/* EventLayout routes - cho tất cả các route con dưới /events */}
          <Route path='/branch/:id' element={<BranchLayout />}>
            <Route index element={<Navigate to='overview' replace />} />
            <Route path='overview' element={<Hello />} />
          </Route>

          {/* General Layout routes */}
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path='/home' element={<Hello />} />
          </Route>

          {/* Fallback route */}
          <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
