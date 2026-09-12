
import heroImg from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <section id="home" className="py-20 px-8 max-w-7xl mx-auto flex items-center justify-between gap-12">
            
            <div className="flex-1 space-y-6">
                <h1 className="text-5xl font-extrabold text-black leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="text-slate-700 text-lg max-w-xl">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex items-center gap-4 pt-4">
                    <a
                        href="#technologies"
                        className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-pink-500/25 hover:opacity-90 transition-all"
                    >
                        Explore Technologies
                    </a>
                    <button className="border border-slate-700 hover:border-pink-500 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all">
                        Learn More
                    </button>
                </div>
            </div>

           
            <div className="flex-1 flex justify-center">
                <img src={heroImg} alt="Hero Banner" className="w-full max-w-md object-contain" />
            </div>
        </section>
    );
};

export default Hero;