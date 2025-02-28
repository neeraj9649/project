import React, { useEffect, useState } from 'react';
import heroImage from './Images/hero/hero-image.png'; // Ensure the correct path to your image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger the animation after the component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Delay to ensure smooth transition
  }, []);

  return (
    <section className='w-full flex px-6 md:px-20 lg:px-36 py-14 md:py-28'>
      <div 
        className={`flex flex-col md:flex-row sm:w-full gap-10 w-full transition-all duration-1000 ${
          isLoaded ? 'animate-slideIn' : 'opacity-0'
        }`}
      >
        {/* Left Column: Text Section */}
        <div className="flex-col w-full md:w-1/2 h-full flex justify-center p-4 md:p-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#050748] font-bold mb-4">
            Website Development Services
          </h1>
          <div className="flex justify-center md:justify-start">
            <button 
              className="px-7 py-3 text-white rounded-full bg-gradient-to-r from-[#ffb085] to-[#ff348c] hover:from-[#ff348c] hover:to-[#ffb085] transition duration-300">
              Connect Us <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Right Column: Image Section */}
        <div className='w-full md:w-1/2 h-full flex justify-center md:justify-end'>
          <img 
            src={heroImage} 
            alt="Professional web development services" 
            className="img-fluid rounded-lg"
            style={{ height: '50vh', width: 'auto' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
