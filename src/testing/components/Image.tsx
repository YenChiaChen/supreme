import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string; 
    maxWidth?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className = '', maxWidth }) => {
  return (
    <div className='flex justify-center items-center'>
        <img
          src={src}
          alt={alt}
          className={`w-full object-cover ${className}`}
          style={{ maxWidth }}
        />
    </div>
  );
};