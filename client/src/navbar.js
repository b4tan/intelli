import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const goToSection = () => {
      const section = document.getElementById(sectionId);
      const navbarHeight = 70;
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      // Redirect to home and scroll to the section after navigation
      navigate('/');
      setTimeout(goToSection, 100); // Small delay to ensure navigation is complete
    } else {
      goToSection();
    }
  };

  return (
    <nav
      className="flex items-center justify-between p-3 w-full fixed overflow-x-hidden z-50 top-0"
      style={{
        backgroundColor: '#25897a',
      }}
    >
      <h1
        className="text-3xl font-bold cursor-pointer flex-shrink-0"
        style={{ color: '#FAF9F6', fontFamily: 'Optima', marginLeft: '10px' }}
        onClick={() => navigate('/')}
      >
        Intelli.
      </h1>

      <div className="hidden md:flex items-center gap-8 flex-grow justify-center">
        <button
          onClick={() => scrollToSection('autograder')}
          className="relative text-[#FAF9F6] text-lg font-bold hover:underline transition-all duration-300 hover:-translate-y-1"
          style={{ fontFamily: 'Optima' }}
        >
          Autograder
        </button>
        <button
          onClick={() => scrollToSection('how-it-works')}
          className="relative text-[#FAF9F6] text-lg font-bold hover:underline transition-all duration-300 hover:-translate-y-1"
          style={{ fontFamily: 'Optima' }}
        >
          How It Works
        </button>
        <button
          onClick={() => scrollToSection('subscribe')}
          className="relative text-[#FAF9F6] text-lg font-bold hover:underline transition-all duration-300 hover:-translate-y-1"
          style={{ fontFamily: 'Optima' }}
        >
          Subscribe
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="relative text-[#FAF9F6] text-lg font-bold hover:underline transition-all duration-300 hover:-translate-y-1"
          style={{ fontFamily: 'Optima' }}
        >
          Contact
        </button>
      </div>

      <button
        onClick={() => scrollToSection('login')}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border text-[#FAF9F6] hover:bg-[#6BB1A6] hover:text-[#FAF9F6] transition font-medium text-sm"
        style={{
          borderColor: '#FAF9F6',
          fontFamily: 'Optima',
          fontWeight: 'bold',
          marginRight: '10px',
        }}
      >
        Login/Sign Up
      </button>
    </nav>
  );
}

export default Navbar;
