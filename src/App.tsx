import { useEffect } from 'react';
import AppRouter from './components/router/AppRouter';
import { Toaster } from './components/ui/sonner/sonner';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <AppRouter />
      <Toaster richColors closeButton />
    </>
  );
}

export default App;
