import { Calendar, CheckCircle, Clock, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation data:', formData);
  };

  const timeSlots = ['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];

  return (
    <section id='reservations' className='py-20 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Reservation Form */}
          <div>
            <div className='mb-8'>
              <h2 className='text-4xl md:text-5xl font-light text-white mb-4'>
                Make a <span className='text-[#FB8500]'>Reservation</span>
              </h2>
              <div className='w-16 h-1 bg-[#FB8500] mb-6'></div>
              <p className='text-gray-300 text-lg'>
                Secure your table for an unforgettable dining experience. We recommend booking at least 2 weeks in
                advance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='bg-gray-900/50 border border-gray-800 rounded-lg p-8'>
              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <label className='block text-white font-medium mb-2'>Full Name *</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-white font-medium mb-2'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                    placeholder='Enter your email'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <label className='block text-white font-medium mb-2'>Phone Number *</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div>
                  <label className='block text-white font-medium mb-2'>Number of Guests *</label>
                  <select
                    name='guests'
                    value={formData.guests}
                    onChange={handleInputChange}
                    className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                  >
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <label className='block text-white font-medium mb-2'>Preferred Date *</label>
                  <input
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                  />
                </div>
                <div>
                  <label className='block text-white font-medium mb-2'>Preferred Time *</label>
                  <select
                    name='time'
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                  >
                    <option value=''>Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='mb-6'>
                <label className='block text-white font-medium mb-2'>Special Occasion</label>
                <input
                  type='text'
                  name='occasion'
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                  placeholder='Birthday, Anniversary, Business Dinner, etc.'
                />
              </div>

              <div className='mb-8'>
                <label className='block text-white font-medium mb-2'>Special Requests</label>
                <textarea
                  name='requests'
                  value={formData.requests}
                  onChange={handleInputChange}
                  rows={4}
                  className='w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:border-[#FB8500] focus:ring-1 focus:ring-[#FB8500] transition-colors duration-300'
                  placeholder='Dietary restrictions, seating preferences, etc.'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-[#FB8500] hover:bg-[#E07600] text-black font-semibold py-4 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2'
              >
                <CheckCircle className='w-5 h-5' />
                <span>Confirm Reservation</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className='bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-8'>
              <h3 className='text-2xl font-light text-white mb-6'>Contact Information</h3>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='w-6 h-6 text-[#FB8500] mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='text-white font-medium mb-1'>Location</h4>
                    <p className='text-gray-300'>
                      123 Gourmet Avenue
                      <br />
                      Downtown District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <Phone className='w-6 h-6 text-[#FB8500] mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='text-white font-medium mb-1'>Phone</h4>
                    <p className='text-gray-300'>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <Mail className='w-6 h-6 text-[#FB8500] mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='text-white font-medium mb-1'>Email</h4>
                    <p className='text-gray-300'>reservations@harasy.com</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <Clock className='w-6 h-6 text-[#FB8500] mt-1 flex-shrink-0' />
                  <div>
                    <h4 className='text-white font-medium mb-1'>Hours</h4>
                    <p className='text-gray-300'>
                      Tuesday - Sunday
                      <br />
                      5:30 PM - 10:30 PM
                      <br />
                      <span className='text-[#FB8500]'>Closed Mondays</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className='bg-black/50 border border-gray-700 rounded-lg p-6'>
              <h4 className='text-white font-semibold mb-4 flex items-center space-x-2'>
                <Calendar className='w-5 h-5 text-[#FB8500]' />
                <span>Reservation Notes</span>
              </h4>
              <ul className='text-gray-300 text-sm space-y-2'>
                <li>• Reservations recommended 2 weeks in advance</li>
                <li>• Smart casual dress code enforced</li>
                <li>• Cancellation required 24 hours in advance</li>
                <li>• Private dining rooms available for groups 8+</li>
                <li>• Dietary restrictions accommodated with advance notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
