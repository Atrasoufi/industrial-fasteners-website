import React, { useState } from 'react';
import { Factory } from 'lucide-react';

interface IndustrialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const IndustrialImage: React.FC<IndustrialImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#0B192C] text-slate-300 blueprint-grid-dark p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Factory className="w-10 h-10 text-[#B48327] mb-3 opacity-85" />
        <span className="text-sm font-medium text-slate-200">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
