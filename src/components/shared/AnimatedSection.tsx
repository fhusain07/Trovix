import React from 'react';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <div
      data-motion-reveal
      data-motion-delay={delay * 1000}
      className={className}
    >
      {children}
    </div>
  );
};
