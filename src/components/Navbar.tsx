import logoText from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <nav className="bg-[#F8FAFC] border-b border-slate-200 sticky top-0 z-50 py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      
        <div className="flex items-center">
          <img src={logoText} alt="Dev Stack Logo" className="h-10 object-contain" />
        </div>

       
        <div className="flex items-center gap-8 text-slate-700 font-medium">
          <a href="#home" className="hover:text-pink-400 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-pink-400 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </div>

       
        <div className="flex items-center gap-4">
          <button className="text-slate-700 font-medium px-4 py-2 transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-medium px-6 py-2 rounded-full hover:opacity-90 shadow-md shadow-pink-500/20 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;