import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

import harasyLogo from '../../assets/images/logos/harasylogo.png';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <img src={harasyLogo} alt='Harasy Logo' className='h-16 mb-2' />

            <p className='text-gray-300 mb-6 leading-relaxed'>
              Experience the pinnacle of fine dining where culinary artistry meets unparalleled elegance. Every dish
              tells a story of passion and perfection.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-[#FB8500] transition-colors duration-300'>
                <Facebook className='w-6 h-6' />
              </a>
              <a href='#' className='text-gray-400 hover:text-[#FB8500] transition-colors duration-300'>
                <Instagram className='w-6 h-6' />
              </a>
              <a href='#' className='text-gray-400 hover:text-[#FB8500] transition-colors duration-300'>
                <Twitter className='w-6 h-6' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Quick Links</h3>
            <nav className='space-y-4'>
              <a href='#home' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Home
              </a>
              <a href='#about' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                About Us
              </a>
              <a href='#menu' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Our Menu
              </a>
              <a
                href='#reservations'
                className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'
              >
                Reservations
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Private Events
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Gift Cards
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Services</h3>
            <nav className='space-y-4'>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Fine Dining
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Wine Pairing
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Chef's Table
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Private Dining
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Corporate Events
              </a>
              <a href='#' className='block text-gray-300 hover:text-[#FB8500] transition-colors duration-300'>
                Catering
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6'>Contact Info</h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-[#FB8500] mt-1 flex-shrink-0' />
                <div>
                  <p className='text-gray-300'>
                    123 Abc
                    <br />
                    Df District
                    <br />
                    Vn
                  </p>
                </div>
              </div>

              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-[#FB8500] flex-shrink-0' />
                <a
                  href='tel:+15551234567'
                  className='text-gray-300 hover:text-[#FB8500] transition-colors duration-300'
                >
                  +123456789
                </a>
              </div>

              <div className='flex items-center space-x-3'>
                <Mail className='w-5 h-5 text-[#FB8500] flex-shrink-0' />
                <a
                  href='mailto:info@harasy.com'
                  className='text-gray-300 hover:text-[#FB8500] transition-colors duration-300'
                >
                  info@harasy.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className='mt-6'>
              <h4 className='text-white font-medium mb-3'>Operating Hours</h4>
              <div className='text-gray-300 text-sm space-y-1'>
                <p>Tuesday - Sunday</p>
                <p>5:30 PM - 10:30 PM</p>
                <p className='text-[#FB8500]'>Closed Mondays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className='py-8 border-t border-gray-800'>
          <div className='text-center max-w-2xl mx-auto'>
            <h3 className='text-white font-semibold text-xl mb-4'>Stay Updated</h3>
            <p className='text-gray-300 mb-6'>
              Subscribe to our newsletter for exclusive events, seasonal menu updates, and special offers.
            </p>
            <div className='flex max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 bg-gray-900 border border-gray-700 rounded-l-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
              />
              <button className='bg-[#FB8500] hover:bg-[#E07600] text-black font-semibold px-6 py-3 rounded-r-md transition-colors duration-300'>
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className='py-6 border-t border-gray-800'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-gray-400 text-sm'>© 2025 Harasy Restaurant. All rights reserved.</div>

            <div className='flex space-x-6 text-sm'>
              <a href='#' className='text-gray-400 hover:text-[#FB8500] transition-colors duration-300'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 hover:text-[#FB8500] transition-colors duration-300'>
                Terms of Service
              </a>
              <a href='#' className='text-gray-400 hover:text-[#FB8500] transition-colors duration-300'>
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
