import React from 'react';
import { Heart, MapPin, Trash2 } from 'lucide-react';
import Badge from '../components/ui/Badge';

const Favorites = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-surface px-6 pt-12 pb-4 shadow-sm sticky top-0 z-40">
        <h1 className="text-xl font-bold text-textPrimary">Saved Schools</h1>
      </header>

      <main className="p-4 space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="group relative bg-white rounded-container shadow-soft border border-slate-100 overflow-hidden">
             {/* Delete Action Background (Swipe simulation) */}
             <div className="absolute inset-y-0 right-0 w-24 bg-red-500 flex items-center justify-center text-white z-0 opacity-0 group-hover:opacity-100 transition-opacity">
               <Trash2 size={20} />
             </div>

             {/* Card Content */}
             <div className="relative z-10 bg-white p-3 flex gap-4 transition-transform group-hover:-translate-x-16">
              <div className="w-24 h-24 bg-slate-200 rounded-xl flex-none"></div>
              <div className="flex-1 py-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-textPrimary leading-tight">Visakha Valley School</h3>
                  <Heart size={16} className="text-red-500 fill-red-500 flex-none" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="curriculum" className="px-1.5 py-0.5 text-[10px]">CBSE</Badge>
                  <span className="text-xs text-textSecondary flex items-center truncate"><MapPin size={12} className="mr-0.5"/> Old Dairy Farm</span>
                </div>
                <p className="text-sm font-semibold text-textPrimary mt-auto">₹65,000 / yr</p>
              </div>
             </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Favorites;
