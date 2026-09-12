
import logoText from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-800 text-slate-500 py-12 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <img src={logoText} alt="Dev Stack Logo" className="h-8 object-contain" />
          <p className="text-sm">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-xs text-slate-600 hover:text-slate-900 font-medium">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-xs text-slate-600 hover:text-slate-900 font-medium">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs text-slate-600 hover:text-slate-900 font-medium">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4">PRODUCT</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#technologies" className="hover:text-slate-900">Home</a></li>
            <li><a href="#templates" className="hover:text-slate-900">Technologies</a></li>
            <li><a href="#integrations" className="hover:text-slate-900">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-slate-900">About Us</a></li>
            <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4">LEGAL</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-slate-900">Terms of Service</a></li>
            <li><a href="#cookies" className="hover:text-slate-900">Cookie Settings</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-6 flex justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-slate-400">Privacy</a>
          <a href="#terms" className="hover:text-slate-400">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;