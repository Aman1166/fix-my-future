import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { useScrollAnimation } from '../Animations';

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'medium' | 'heavy';
  interactive?: boolean;
  animateOnScroll?: boolean;
  delay?: number;
  children: React.ReactNode;
}

export function getGlassClass(variant: 'light' | 'medium' | 'heavy' = 'medium') {
  if (variant === 'light') return 'glass-light';
  if (variant === 'heavy') return 'glass-heavy';
  return 'glass';
}

export function Glass({
  variant = 'medium',
  interactive = false,
  animateOnScroll = false,
  delay = 0,
  className,
  children,
  ...props
}: GlassProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={animateOnScroll ? ref : undefined}
      className={cn(
        getGlassClass(variant),
        interactive && 'glass-hover',
        animateOnScroll && 'transition-all duration-700 transform',
        animateOnScroll && (isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'),
        className
      )}
      style={{ 
        ...props.style,
        transitionDelay: animateOnScroll ? `${delay}ms` : undefined 
      }}
      {...props}
    >
      {children}
    </div>
  );
}






