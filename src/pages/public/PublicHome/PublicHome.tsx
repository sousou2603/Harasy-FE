import Footer from '@/components/global-components/Footer';
import Header from '@/components/global-components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservations from './components/Reservations';

function PublicHome() {
  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Reservations />
      <Footer />
    </div>
  );
}

export default PublicHome;
