
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  ...props
}: AnimatedButtonProps) => {
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'hover:bg-secondary text-foreground',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 h-8',
    md: 'text-sm px-4 py-2 h-10',
    lg: 'text-base px-6 py-3 h-12',
  };

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 overflow-hidden',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        isLoading ? 'opacity-70 cursor-not-allowed' : '',
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
      
      <span className="relative flex items-center gap-2">
        {isLoading ? (
          <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          icon && iconPosition === 'left' && <span>{icon}</span>
        )}
        
        <span>{children}</span>
        
        {!isLoading && icon && iconPosition === 'right' && <span>{icon}</span>}
      </span>
    </button>
  );
};

export default AnimatedButton;
