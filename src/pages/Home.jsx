import React from 'react';
import { MapPin, Bell, Star } from 'lucide-react';
import { SearchInput } from '../components/ui/Input';
import Badge from '../components/ui/Badge';

const Home = () => {
  const boards = ['CBSE', 'ICSE', 'State Board', 'International'];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-surface/80 backdrop-blur-md z-40 px-6 pt-12 pb-4 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
               {/* Avatar placeholder */}
            </div>
            <div>
              <p className="text-xs text-textSecondary font-medium">Good Morning,</p>
              <h2 className="text-sm font-bold text-textPrimary">Priya Sharma</h2>
            </div>
          </div>
          <button className="p-2 bg-slate-50 rounded-full text-slate-600 relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-accentAmber rounded-full border-2 border-surface"></span>
          </button>
        </div>

        {/* Location Dropdown Placeholder */}
        <div className="flex items-center gap-1.5 text-textPrimary mb-4">
          <MapPin size={18} className="text-primary" />
          <span className="font-semibold text-sm">Madhurawada, Vizag</span>
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Search & Filter */}
        <SearchInput onFilterClick={() => console.log('Open Filter Sheet')} />
      </header>

      <main className="flex-1 px-6 py-6 space-y-8 overflow-y-auto">
        {/* Board Categories */}
        <section>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {boards.map((board) => (
              <button key={board} className="flex-none px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-textPrimary hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
                {board}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Carousel */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-textPrimary">Featured Schools</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2].map((i) => (
              <div key={i} className="flex-none w-72 h-48 rounded-container relative overflow-hidden shadow-soft">
                <div className="absolute inset-0 bg-slate-300"></div> {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-bold text-lg leading-tight">Oakridge International</h4>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                      <span className="text-accentAmber text-xs font-bold">4.9</span>
                      <Star size={12} className="text-accentAmber fill-accentAmber" />
                    </div>
                  </div>
                  <p className="text-white/80 text-xs flex items-center gap-1"><MapPin size={10}/> Tagarapuvalasa</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby List */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-textPrimary">Nearby You</h3>
            <button className="text-sm text-primary font-medium">See All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-3 bg-white rounded-interactive shadow-soft border border-slate-50">
                <div className="w-20 h-20 bg-slate-200 rounded-lg flex-none"></div>
                <div className="flex-1 py-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-textPrimary text-sm">Delhi Public School</h4>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="curriculum">CBSE</Badge>
                    <span className="text-xs text-textSecondary flex items-center"><MapPin size={10} className="mr-0.5"/> Anandapuram</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700">₹75,000 - ₹1,20,000 / yr</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
