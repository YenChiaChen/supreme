import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    maxWidth?: string; 
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
