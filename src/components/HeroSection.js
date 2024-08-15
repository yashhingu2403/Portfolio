import React from 'react';
import 'devicon/devicon.min.css';

const HeroSection = ({ heroVisible }) => {
  return (
    <section id="hero" className={`bg-gray-900 text-white h-screen flex items-center justify-center transform transition-transform duration-1000 ${heroVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      
      {/* Left Side - Text */}
      <div className="flex-1 text-left pl-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Tech Enthusiast's World</h1>
        <p className="text-xl mb-8">Crafting Digital Experiences with Innovation and Precision.</p>
        <a href="#about" className="mt-8 ml-32 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-slate-800 font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:scale-110">
          Learn More
        </a>
      </div>
      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center right-2">
        <img 
          src={`${process.env.PUBLIC_URL}/WhatsApp Image 2024-05-31 at 02.52.50_a6fb7cd6.jpg`} 
          alt="Profile" 
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
