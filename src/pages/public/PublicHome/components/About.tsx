import beef from '@/assets/images/beef.jpg';
import { Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id='about' className='py-20 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div>
            <div className='mb-8'>
              <h2 className='text-4xl md:text-5xl font-light text-white mb-4'>
                Our <span className='text-[#FB8500]'>Story</span>
              </h2>
              <div className='w-16 h-1 bg-[#FB8500]'></div>
            </div>

            <div className='space-y-6 text-gray-300 leading-relaxed'>
              <p>
                Founded by Chef Marcus Harasy in 2018, HARASY represents the pinnacle of fine dining where traditional
                techniques meet innovative culinary artistry. Our commitment to excellence has earned us recognition
                among the world's finest restaurants.
              </p>

              <p>
                Every dish tells a story, crafted with the finest ingredients sourced from local farms and international
                purveyors. Our team of dedicated culinary artists works tirelessly to create an unforgettable dining
                experience that engages all the senses.
              </p>

              <p>
                Located in the heart of the city, our intimate 48-seat dining room provides the perfect setting for both
                romantic dinners and business celebrations, where every detail has been carefully considered to create
                an atmosphere of refined elegance.
              </p>
            </div>

            <div className='mt-10 grid grid-cols-2 gap-6'>
              <div className='text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800'>
                <Award className='w-8 h-8 text-[#FB8500] mx-auto mb-3' />
                <h3 className='text-white font-semibold mb-1'>Michelin Star</h3>
                <p className='text-gray-400 text-sm'>2019 - Present</p>
              </div>
              <div className='text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800'>
                <Users className='w-8 h-8 text-[#FB8500] mx-auto mb-3' />
                <h3 className='text-white font-semibold mb-1'>Expert Team</h3>
                <p className='text-gray-400 text-sm'>25+ Professionals</p>
              </div>
            </div>
          </div>

          {/* Restaurant Interior Image */}
          <div className='relative'>
            <div className='aspect-w-4 aspect-h-5 bg-gray-800 rounded-lg overflow-hidden'>
              <img src={beef} alt='Restaurant Interior' className='w-full h-96 lg:h-[500px] object-cover' />
            </div>

            {/* Floating Stats */}
            {/* <div className='absolute -bottom-6 -right-6 bg-[#FB8500] text-black p-6 rounded-lg shadow-xl'>
              <div className='text-center'>
                <h3 className='text-2xl font-bold mb-1'>7</h3>
                <p className='text-sm font-medium'>Years of Excellence</p>
              </div>
            </div>

            <div className='absolute -top-6 -left-6 bg-black border-2 border-[#FB8500] text-white p-4 rounded-lg shadow-xl'>
              <div className='flex items-center space-x-2'>
                <Heart className='w-5 h-5 text-[#FB8500] fill-current' />
                <span className='text-sm font-medium'>Passion Driven</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
