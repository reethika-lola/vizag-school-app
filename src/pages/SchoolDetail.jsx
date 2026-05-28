import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Share2, MapPin, Building2, BookOpen, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const SchoolDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'fees', label: 'Fees & Facilities' },
    { id: 'admission', label: 'Admission Process' },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header Image (Parallax Placeholder) */}
      <div className="h-72 bg-slate-300 relative">
        <div className="absolute top-0 left-0 right-0 p-4 pt-12 flex justify-between items-center z-10 bg-gradient-to-b from-slate-900/50 to-transparent">
          <button onClick={() => navigate(-1)} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
            <ArrowLeft size={24} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
            <Share2 size={24} />
          </button>
        </div>
      </div>

      {/* Floating Info Card */}
      <div className="px-4 -mt-16 relative z-20">
        <div className="bg-surface rounded-container p-6 shadow-soft border border-slate-100">
          <Badge variant="success" className="mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accentGreen mr-1.5 animate-pulse"></span>
            Admissions Open (2026-27)
          </Badge>
          <h1 className="text-2xl font-bold text-textPrimary leading-tight mb-2">Visakha Valley School</h1>
          <p className="text-textSecondary flex items-center gap-1 text-sm mb-4">
            <MapPin size={16} /> Old Dairy Farm, Visakhapatnam
          </p>

          <div className="flex gap-4 border-t border-slate-100 pt-4">
            <div className="flex-1 text-center border-r border-slate-100">
              <p className="text-xs text-textSecondary mb-1">Board</p>
              <p className="font-bold text-textPrimary text-sm">CBSE</p>
            </div>
            <div className="flex-1 text-center border-r border-slate-100">
              <p className="text-xs text-textSecondary mb-1">Type</p>
              <p className="font-bold text-textPrimary text-sm">Co-ed</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-textSecondary mb-1">Grades</p>
              <p className="font-bold text-textPrimary text-sm">LKG - XII</p>
            </div>
          </div>
        </div>
      </div>

      {/* Segmented Tabs */}
      <div className="sticky top-0 bg-surface/90 backdrop-blur-md z-30 px-4 pt-4 border-b border-slate-100 mt-4">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-textSecondary hover:text-textPrimary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Placeholder */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in">
            <section>
              <h3 className="text-lg font-bold text-textPrimary mb-2">About School</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                Established in 1968, Visakha Valley School is one of the premier co-educational institutions in Visakhapatnam, offering holistic education with modern amenities nestled in a serene green campus.
              </p>
            </section>

            <section>
               <h3 className="text-lg font-bold text-textPrimary mb-3">Key Highlights</h3>
               <div className="grid grid-cols-2 gap-3">
                  {[
                    {icon: Building2, label: "40 Acre Campus"},
                    {icon: BookOpen, label: "Smart Classrooms"},
                    {icon: Clock, label: "Day Boarding"},
                    {icon: MapPin, label: "City Center"}
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-interactive border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm"><item.icon size={16}/></div>
                      <span className="text-xs font-medium text-textPrimary">{item.label}</span>
                    </div>
                  ))}
               </div>
            </section>

             {/* Mini Map Placeholder */}
             <div className="h-40 bg-slate-200 rounded-container mt-6 flex items-center justify-center text-slate-500 text-sm">
                Embedded Google Map
             </div>
          </div>
        )}
        {activeTab !== 'overview' && (
          <div className="py-12 text-center text-textSecondary">Content for {activeTab} goes here</div>
        )}
      </div>

      {/* Static Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-slate-100 p-4 px-6 pb-safe z-40 flex gap-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <Button variant="outline" className="flex-1 py-3 text-sm">Add to Compare</Button>
        <Button variant="teal" className="flex-1 py-3 text-sm shadow-lg shadow-teal-500/30">Apply Now</Button>
      </div>
    </div>
  );
};

export default SchoolDetail;
