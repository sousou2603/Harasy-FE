import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Lazy loading components
const PublicHome = lazy(() => import('../../pages/public/PublicHome/PublicHome'));

// Loading component
const LoadingSpinner = () => (
  <div className='flex items-center justify-center min-h-screen bg-black'>
    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-white'></div>
  </div>
);

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<PublicHome />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
