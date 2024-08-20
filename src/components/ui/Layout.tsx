import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto mt-8 pt-18 xl:px-[10%] 2xl:px-[5%] px-[0%] ${className}`}>
      {children}
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <div className={`py-8 ${className}`}>
      {children}
    </div>
  );
};


