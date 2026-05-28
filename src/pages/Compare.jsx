import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';

const Compare = () => {
  const navigate = useNavigate();

  const features = ['Annual Fees', 'Board', 'Transport', 'Hostel', 'Student-Teacher Ratio'];
  const school1 = { name: "Oakridge", fees: "₹1,50,000", board: "IB/CBSE", transport: true, hostel: true, ratio: "1:15" };
  const school2 = { name: "DPS Anandapuram", fees: "₹85,000", board: "CBSE", transport: true, hostel: false, ratio: "1:25" };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="px-4 pt-12 pb-4 shadow-sm flex items-center gap-3 sticky top-0 bg-surface z-40">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-textPrimary hover:bg-slate-50 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-textPrimary">Compare Schools</h1>
      </header>

      <main className="flex-1 overflow-x-auto p-4">
        <div className="min-w-[600px]">
          {/* Header Row */}
          <div className="flex border-b border-slate-200 pb-4 mb-4">
            <div className="w-1/3 flex-none pr-4"></div>
            <div className="w-1/3 flex-none px-4 border-l border-slate-100 text-center">
              <div className="w-16 h-16 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h3 className="font-bold text-textPrimary">{school1.name}</h3>
            </div>
            <div className="w-1/3 flex-none px-4 border-l border-slate-100 text-center">
              <div className="w-16 h-16 bg-slate-200 rounded-lg mx-auto mb-2"></div>
              <h3 className="font-bold text-textPrimary">{school2.name}</h3>
            </div>
          </div>

          {/* Data Rows */}
          <div className="space-y-0">
             {features.map((feature, idx) => {
               const key = feature.toLowerCase().split(' ')[0]; // simple mapping
               return (
                <div key={idx} className={`flex py-4 ${idx % 2 === 0 ? 'bg-slate-50 rounded-lg' : ''}`}>
                  <div className="w-1/3 flex-none pl-4 text-sm font-semibold text-textSecondary">{feature}</div>
                  <div className="w-1/3 flex-none px-4 text-center text-sm text-textPrimary font-medium flex items-center justify-center">
                    {typeof school1[key] === 'boolean' ? (school1[key] ? <Check size={18} className="text-accentGreen"/> : <X size={18} className="text-slate-300"/>) : school1[key]}
                  </div>
                  <div className="w-1/3 flex-none px-4 text-center text-sm text-textPrimary font-medium flex items-center justify-center">
                    {typeof school2[key] === 'boolean' ? (school2[key] ? <Check size={18} className="text-accentGreen"/> : <X size={18} className="text-slate-300"/>) : school2[key]}
                  </div>
                </div>
               )
             })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Compare;
