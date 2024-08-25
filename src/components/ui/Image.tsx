import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    maxWidth?: string; 
}

interface GalleryProps {
    images: string[];
  }

export const Image: React.FC<ImageProps> = ({ src, alt, className = '', maxWidth = '' }) => {
    return (
        <div className="flex justify-center">
            <img
                src={src}
                className={`mt-md w-full ${className}`}
                alt={alt}
                style={{ maxWidth }}
            />
        </div>
    );
};



export const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden">
            <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
              className={`w-full h-full object-cover hover:scale-[1.1] transition-transform duration-300 max-h-[300px]`}
            />
          </div>
        ))}
      </div>
    );
  };