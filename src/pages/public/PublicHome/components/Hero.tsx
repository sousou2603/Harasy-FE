import hcmImg from '@/assets/images/HCM.png';
import hrsImg from '@/assets/images/HRS.png';
import wellingtonImg from '@/assets/images/wellington.jpg';
import { Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Exquisite Dining Experience',
      subtitle: 'Where culinary artistry meets unparalleled elegance',
      description: 'Discover the pinnacle of fine dining in the heart of the city',
      primaryButton: 'Make Reservation',
      secondaryButton: 'View Menu',
      backgroundPlaceholder: 'Hero Image 1 - Fine dining interior',
      backgroundImage: wellingtonImg,
    },
    {
      title: 'Turn Up The Heat',
      subtitle: 'Ignite your senses with our signature dishes',
      description: 'Experience bold flavors and innovative culinary techniques',
      primaryButton: 'Explore Menu',
      secondaryButton: "Chef's Table",
      backgroundPlaceholder: 'Hero Image 2 - Signature dish presentation',
      backgroundImage: hcmImg,
    },
    {
      title: 'Michelin Starred Excellence',
      subtitle: 'Award-winning cuisine crafted to perfection',
      description: 'Join us for an unforgettable journey through taste and texture',
      primaryButton: 'Book Now',
      secondaryButton: 'Private Events',
      backgroundPlaceholder: 'Hero Image 3 - Chef preparing dish',
      backgroundImage: hrsImg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id='home' className='relative min-h-screen overflow-hidden'>
      {/* Carousel Container */}
      <div className='relative w-full h-screen'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10'></div>

            <div
              className='absolute inset-0 bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            ></div>

            {/* Content */}
            <div className='relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
              <div className='text-center max-w-4xl mx-auto'>
                {/* Awards Badge */}
                {index === 0 && (
                  <div className='mb-6'>
                    <div className='flex items-center justify-center space-x-2 mb-4'>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className='w-5 h-5 text-[#FB8500] fill-current' />
                      ))}
                    </div>
                    <div className='flex items-center justify-center space-x-4 text-gray-300 mb-8'>
                      <div className='flex items-center space-x-2'>
                        <Award className='w-5 h-5 text-[#FB8500]' />
                        <span className='text-sm font-medium'>Michelin Starred</span>
                      </div>
                      <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                      <span className='text-sm font-medium'>Est. 2018</span>
                    </div>
                  </div>
                )}

                <h1 className='text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight'>
                  {slide.title.split(' ').map((word, wordIndex) => (
                    <span key={wordIndex} className={wordIndex === 1 || wordIndex === 2 ? 'text-[#FB8500]' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>

                <p className='text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed'>
                  {slide.subtitle}
                </p>

                <p className='text-lg text-gray-400 mb-8 max-w-xl mx-auto'>{slide.description}</p>

                <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
                  <button className='bg-[#FB8500] hover:bg-[#E07600] text-black font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 text-lg'>
                    {slide.primaryButton}
                  </button>
                  <button className='border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-md transition-all duration-300 text-lg'>
                    {slide.secondaryButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label='Previous slide'
        className='absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>

      <button
        onClick={nextSlide}
        aria-label='Next slide'
        className='absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110'
      >
        <ChevronRight className='w-6 h-6' />
      </button>

      {/* Dot Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#FB8500] scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Floating Info Cards - Only show on first slide */}
      {/* {currentSlide === 0 && (
        <div className='absolute bottom-20 left-4 right-4 z-20 max-w-7xl mx-auto hidden lg:block'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105'>
              <h3 className='text-[#FB8500] font-semibold text-lg mb-2'>Hours</h3>
              <p className='text-white text-sm'>Tue-Sun: 5:30 PM - 10:30 PM</p>
              <p className='text-gray-400 text-xs'>Closed Mondays</p>
            </div>
            <div className='bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105'>
              <h3 className='text-[#FB8500] font-semibold text-lg mb-2'>Dress Code</h3>
              <p className='text-white text-sm'>Smart Casual</p>
              <p className='text-gray-400 text-xs'>Elegant attire preferred</p>
            </div>
            <div className='bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105'>
              <h3 className='text-[#FB8500] font-semibold text-lg mb-2'>Private Events</h3>
              <p className='text-white text-sm'>Available</p>
              <p className='text-gray-400 text-xs'>Contact for details</p>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Hero;
