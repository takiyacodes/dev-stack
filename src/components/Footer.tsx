
import logoText from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 py-8 sm:py-12 px-4 sm:px-8 mt-12 sm:mt-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
        
        <div className="space-y-4">
          <img src={logoText} alt="Dev Stack Logo" className="h-8 object-contain" />
          <p className="text-sm text-slate-600">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs text-slate-600 hover:text-pink-500 font-medium transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xs text-slate-600 hover:text-pink-500 font-medium transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs text-slate-600 hover:text-pink-500 font-medium transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="text-black font-semibold mb-3 sm:mb-4 text-sm sm:text-base">PRODUCT</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#technologies" className="hover:text-pink-500 transition-colors">Home</a></li>
            <li><a href="#templates" className="hover:text-pink-500 transition-colors">Technologies</a></li>
            <li><a href="#integrations" className="hover:text-pink-500 transition-colors">Integrations</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-black font-semibold mb-3 sm:mb-4 text-sm sm:text-base">COMPANY</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#about" className="hover:text-pink-500 transition-colors">About Us</a></li>
            <li><a href="#careers" className="hover:text-pink-500 transition-colors">Careers</a></li>
            <li><a href="#blog" className="hover:text-pink-500 transition-colors">Blog</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-black font-semibold mb-3 sm:mb-4 text-sm sm:text-base">LEGAL</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#privacy" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            <li><a href="#cookies" className="hover:text-pink-500 transition-colors">Cookie Settings</a></li>
          </ul>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center sm:text-left">
        <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-pink-500 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-pink-500 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;