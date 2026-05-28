import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary flex flex-col items-center justify-center p-6 text-white">
      <div className="glassmorphism p-8 rounded-container flex flex-col items-center shadow-2xl animate-pulse">
        {/* Abstract icon placeholder for Dolphin's Nose + Book */}
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
           <BookOpen size={48} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Vizag Schools</h1>
        <p className="text-white/80 text-center text-sm font-medium">Discover the Best Schools<br/>in Visakhapatnam</p>
      </div>
    </div>
  );
};

export default Splash;
