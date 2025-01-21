import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300';
  
  const variants = {
    primary: 'bg-brown-800 text-brown-50 hover:bg-brown-900 shadow-md hover:shadow-lg',
    secondary: 'bg-cream-500 text-brown-900 hover:bg-cream-600 shadow-md hover:shadow-lg',
    outline: 'border-2 border-brown-800 text-brown-800 hover:bg-brown-800 hover:text-brown-50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}