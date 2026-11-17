import React from 'react';
// Button component for consistency.
export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string 
}) => {
  const baseStyles = "px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium inline-flex items-center justify-center shadow-md hover:shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
