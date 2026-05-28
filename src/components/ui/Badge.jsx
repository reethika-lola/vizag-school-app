import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variants = {
    default: "bg-slate-100 text-textSecondary",
    rating: "bg-accentAmber/10 text-accentAmber",
    success: "bg-accentGreen/10 text-accentGreen",
    curriculum: "bg-primary/10 text-primary",
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
