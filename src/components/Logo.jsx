import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  const heightClass = size === 'large' 
    ? 'h-24 md:h-28' 
    : size === 'small' 
    ? 'h-12 md:h-14' 
    : 'h-16 md:h-20';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img 
        src="/logo.png" 
        alt="IM-PACT - The Center of Communication" 
        className={`${heightClass} w-auto object-contain max-w-none`}
      />
    </div>
  );
}
