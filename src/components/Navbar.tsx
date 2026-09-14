
import { useState } from 'react';
import logoText from '../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8FAFC] border-b border-slate-200 sticky top-0 z-50 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">


        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-pink-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>


        <div className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logoText} alt="Dev Stack Logo" className="h-8 md:h-10 object-contain" />
        </div>


        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <a href="#home" className="hover:text-pink-400 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-pink-400 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </div>


        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-slate-700 font-medium px-2 sm:px-4 py-2 transition-colors text-sm sm:text-base">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-medium px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:opacity-90 shadow-md shadow-pink-500/20 transition-all text-sm sm:text-base">
            Sign Up
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-200 flex flex-col gap-4 text-slate-700 font-medium">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-pink-400 transition-colors px-2">Home</a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="hover:text-pink-400 transition-colors px-2">Technologies</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-pink-400 transition-colors px-2">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-pink-400 transition-colors px-2">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-pink-400 transition-colors px-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;