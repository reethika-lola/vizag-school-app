import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-interactive transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-sky-700 focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-teal-700 focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    minimal: "text-textSecondary hover:bg-slate-100 hover:text-textPrimary",
    teal: "bg-secondary text-white hover:bg-teal-700 focus:ring-secondary",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg w-full",
    icon: "p-2",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[props.size || 'md']} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
