import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import harasyLogo from '../../assets/images/logos/harasylogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}

          <img src={harasyLogo} alt='Harasy Logo' className='h-16' />

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            <a href='#home' className='text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'>
              Home
            </a>
            <a href='#about' className='text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'>
              About
            </a>
            <a href='#menu' className='text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'>
              Menu
            </a>
            <a
              href='#reservations'
              className='text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'
            >
              Reservations
            </a>
            <a href='#contact' className='text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'>
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-4'>
            <button className='bg-[#FB8500] hover:bg-[#E07600] text-black font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105'>
              Reserve Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className='lg:hidden text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden border-t border-gray-800'>
            <nav className='py-4 space-y-4'>
              <a
                href='#home'
                className='block text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'
              >
                Home
              </a>
              <a
                href='#about'
                className='block text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'
              >
                About
              </a>
              <a
                href='#menu'
                className='block text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'
              >
                Menu
              </a>
              <a
                href='#reservations'
                className='block text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'
              >
                Reservations
              </a>
              <a
                href='#contact'
                className='block text-white hover:text-[#FB8500] transition-colors duration-300 font-medium'
              >
                Contact
              </a>
              <div className='pt-4 border-t border-gray-800'>
                <button className='w-full bg-[#FB8500] hover:bg-[#E07600] text-black font-semibold px-6 py-2 rounded-md transition-colors duration-300'>
                  Reserve Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
