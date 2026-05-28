import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const Input = ({ label, icon: Icon, type = 'text', className = '', ...props }) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-textSecondary mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-slate-400" />
          </div>
        )}
        <input
          type={type}
          className={`block w-full rounded-interactive border border-slate-200 bg-white py-2.5 px-4 text-textPrimary placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${
            Icon ? 'pl-10' : ''
          }`}
          {...props}
        />
      </div>
    </div>
  );
};

export const SearchInput = ({ onFilterClick, ...props }) => {
  return (
    <div className="relative shadow-soft rounded-interactive">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <input
        type="text"
        className="block w-full rounded-interactive border-0 bg-white py-3 pl-10 pr-12 text-textPrimary placeholder-slate-400 focus:ring-2 focus:ring-primary sm:text-sm"
        placeholder="Search schools..."
        {...props}
      />
      {onFilterClick && (
        <button
          onClick={onFilterClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-primary transition-colors"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Input;
