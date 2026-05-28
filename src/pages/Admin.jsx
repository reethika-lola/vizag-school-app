import React, { useState } from 'react';
import { Users, Eye, UploadCloud, Save } from 'lucide-react';
import Button from '../components/ui/Button';

const Admin = () => {
  const [admissionsOpen, setAdmissionsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 px-6 pt-12 pb-6 text-white sticky top-0 z-40">
        <h1 className="text-xl font-bold mb-1">Admin Panel</h1>
        <p className="text-slate-400 text-sm">Oakridge International School</p>
      </header>

      <main className="flex-1 p-4 space-y-6">
        {/* Master Toggle */}
        <div className="bg-white p-4 rounded-container shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-textPrimary">Admissions Status</h3>
            <p className="text-xs text-textSecondary">Global toggle for app visibility</p>
          </div>
          <button
            onClick={() => setAdmissionsOpen(!admissionsOpen)}
            className={`w-14 h-8 rounded-full relative p-1 transition-colors ${admissionsOpen ? 'bg-accentGreen' : 'bg-slate-300'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full absolute transition-transform ${admissionsOpen ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>

        {/* Analytics Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-container shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2"><Users size={16}/></div>
            <p className="text-2xl font-bold text-textPrimary">142</p>
            <p className="text-xs text-textSecondary font-medium">Active Inquiries</p>
          </div>
          <div className="bg-white p-4 rounded-container shadow-sm border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2"><Eye size={16}/></div>
            <p className="text-2xl font-bold text-textPrimary">3.2k</p>
            <p className="text-xs text-textSecondary font-medium">Profile Views</p>
          </div>
        </div>

        {/* Form Editor */}
        <div className="bg-white rounded-container shadow-sm border border-slate-100 p-4 space-y-4">
          <h3 className="font-bold text-textPrimary border-b border-slate-100 pb-2">Update Details</h3>

          <div>
            <label className="block text-xs font-semibold text-textSecondary mb-1.5 uppercase">Annual Fee Base (₹)</label>
            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" defaultValue="150000" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-textSecondary mb-1.5 uppercase">Upload Media</label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 cursor-pointer transition-colors">
              <UploadCloud size={24} className="text-slate-400 mb-2" />
              <p className="text-sm font-medium text-textPrimary">Tap to upload campus photos</p>
              <p className="text-xs text-textSecondary mt-1">PNG, JPG up to 5MB</p>
            </div>
          </div>

          <Button className="w-full mt-4 flex items-center justify-center gap-2"><Save size={18}/> Save Changes</Button>
        </div>
      </main>
    </div>
  );
};

export default Admin;
