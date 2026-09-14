
import heroImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <section id="home" className="py-10 md:py-20 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            
           
            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
                    Build Your Ideal <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="text-slate-700 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 md:pt-4">
                    <a
                        href="#technologies"
                        className="w-full sm:w-auto text-center bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-pink-500/25 hover:opacity-90 transition-all"
                    >
                        Explore Technologies
                    </a>
                    <button className="w-full sm:w-auto border border-slate-700 hover:border-pink-500 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all">
                        Learn More
                    </button>
                </div>
            </div>

          
            <div className="flex-1 flex justify-center w-full">
                <img src={heroImg} alt="Hero Banner" className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain" />
            </div>
        </section>
    );
};

export default Hero;