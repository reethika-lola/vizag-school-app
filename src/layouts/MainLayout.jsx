import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Compass, Heart, User } from 'lucide-react';

const MainLayout = () => {
  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/schools', icon: Compass, label: 'Explore' },
    { path: '/favorites', icon: Heart, label: 'Favorites' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Content Area */}
      <div className="w-full h-full">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-surface border-t border-slate-100 px-6 py-3 flex justify-between items-center pb-safe z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 ${
                isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
              }`
            }
          >
            <item.icon size={24} strokeWidth={2} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MainLayout;
