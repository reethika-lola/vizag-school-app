import React from 'react';
import { Settings, FileText, Bell, Globe, LogOut, ChevronRight } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-surface px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-white shadow-sm"></div>
          <div>
            <h1 className="text-xl font-bold text-textPrimary">Priya Sharma</h1>
            <p className="text-sm text-textSecondary font-medium">+91 98765 43210</p>
            <div className="mt-1 inline-block px-2 py-0.5 bg-accentAmber/10 text-accentAmber text-[10px] font-bold rounded-full">Pro Parent</div>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <section>
          <h3 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 ml-2">My Activity</h3>
          <div className="bg-white rounded-container shadow-sm border border-slate-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-primary" />
                <span className="font-medium text-textPrimary text-sm">My Applications</span>
              </div>
              <ChevronRight size={16} className="text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-secondary" />
                <span className="font-medium text-textPrimary text-sm">Inquiries Sent</span>
              </div>
              <ChevronRight size={16} className="text-slate-400" />
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-2 ml-2">Preferences</h3>
          <div className="bg-white rounded-container shadow-sm border border-slate-100 overflow-hidden">
            <div className="w-full flex items-center justify-between p-4 border-b border-slate-50">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-slate-600" />
                <span className="font-medium text-textPrimary text-sm">Push Notifications</span>
              </div>
              {/* Toggle Switch */}
              <div className="w-10 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
              </div>
            </div>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-slate-600" />
                <span className="font-medium text-textPrimary text-sm">Language</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-textSecondary">
                English <ChevronRight size={16} className="text-slate-400" />
              </div>
            </button>
          </div>
        </section>

        <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-container font-bold text-sm hover:bg-red-100 transition-colors">
          <LogOut size={18} /> Log Out
        </button>
      </main>
    </div>
  );
};

export default Profile;
