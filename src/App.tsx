import { useState, useEffect } from 'react';
import {  toast, ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import type { Tech } from './types';

function App() { 
  const [technologies, setTechnologies] = useState<Tech[]>([]);
  const [selectedStack, setSelectedStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Tech[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`${itemToRemove?.name || 'Item'} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('All items cleared from your stack!');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-100 font-sans">
      <ToastContainer position="top-right" autoClose={2500} theme="light" />
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-700 mt-2 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
         
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
           
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAddToStack={handleAddToStack}
                  isSelected={selectedStack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

           
            <div className="lg:col-span-1 w-full">
              <YourStack
                selectedStack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;


