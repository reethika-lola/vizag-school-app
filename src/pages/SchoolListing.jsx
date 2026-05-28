import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, MapPin, Bus, FlaskConical, Trophy } from 'lucide-react';
import { SearchInput } from '../components/ui/Input';
import Badge from '../components/ui/Badge';

const SchoolListing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-surface px-4 pt-12 pb-4 shadow-sm sticky top-0 z-40">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-textPrimary hover:bg-slate-50 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-textPrimary">Explore Schools</h1>
        </div>
        <SearchInput onFilterClick={() => {}} placeholder="Search CBSE schools in Vizag..." />
      </header>

      {/* List */}
      <main className="flex-1 p-4 space-y-4 overflow-y-auto">
        <p className="text-sm text-textSecondary font-medium">Showing 24 results for "CBSE"</p>

        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white rounded-container p-3 shadow-soft border border-slate-100 flex gap-4 cursor-pointer" onClick={() => navigate(`/school/${i}`)}>
            {/* 1:1 Image Preview */}
            <div className="w-28 h-28 bg-slate-200 rounded-xl flex-none overflow-hidden relative">
               <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-textPrimary flex items-center gap-1 shadow-sm">
                 <span className="text-accentAmber">★</span> 4.8
               </div>
            </div>

            {/* Metadata */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="font-bold text-textPrimary leading-tight mb-1">Navy Children School</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="curriculum" className="px-1.5 py-0.5 text-[10px]">CBSE</Badge>
                  <span className="text-xs text-textSecondary flex items-center truncate"><MapPin size={12} className="mr-0.5 flex-none"/> Nausena Baugh</span>
                </div>
                <p className="text-sm font-semibold text-textPrimary">₹45,000 - ₹80,000 <span className="text-xs font-normal text-textSecondary">/ yr</span></p>
              </div>

              {/* Utility Strip */}
              <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1 text-[10px] text-textSecondary font-medium">
                  <Bus size={12} className="text-slate-400" /> Transport
                </div>
                <div className="flex items-center gap-1 text-[10px] text-textSecondary font-medium">
                  <FlaskConical size={12} className="text-slate-400" /> Labs
                </div>
                <div className="flex items-center gap-1 text-[10px] text-textSecondary font-medium">
                  <Trophy size={12} className="text-slate-400" /> Sports
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Placeholder for Bottom Sheet Modal */}
      {/*
      <div className="fixed inset-0 bg-slate-900/40 z-50 flex items-end">
        <div className="bg-surface w-full h-[80vh] rounded-t-[32px] p-6">... Advanced Filter Content ...</div>
      </div>
      */}
    </div>
  );
};

export default SchoolListing;
