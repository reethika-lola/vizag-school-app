import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const slides = [
  {
    title: "Find Your Perfect Fit",
    description: "Browse verified schools across MVP Colony, Gajuwaka, Madhurawada and more.",
    bgColor: "bg-sky-50"
  },
  {
    title: "Compare Side-by-Side",
    description: "Analyze fees, boards, and amenities instantly to make an informed choice.",
    bgColor: "bg-teal-50"
  },
  {
    title: "Direct Admissions",
    description: "Track admission dates and submit application forms directly through the app.",
    bgColor: "bg-indigo-50"
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Top Half: Illustration Area */}
      <div className={`flex-1 ${slides[currentSlide].bgColor} flex items-center justify-center p-8 transition-colors duration-500`}>
        {/* Placeholder for vector illustration */}
        <div className="w-64 h-64 bg-white/50 rounded-full flex items-center justify-center shadow-soft">
           <span className="text-slate-400 font-medium">Illustration {currentSlide + 1}</span>
        </div>
      </div>

      {/* Bottom Half: Content & Controls */}
      <div className="flex-1 px-8 py-10 flex flex-col justify-between bg-surface rounded-t-container -mt-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-textPrimary mb-4">{slides[currentSlide].title}</h2>
          <p className="text-textSecondary text-lg leading-relaxed">{slides[currentSlide].description}</p>
        </div>

        <div className="space-y-8">
          {/* Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-slate-200'}`}
              />
            ))}
          </div>

          {/* Action */}
          <Button size="lg" onClick={handleNext} className="w-full py-4 text-lg">
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
