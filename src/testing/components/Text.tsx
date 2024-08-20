import React from 'react';

interface TextProps {
    text: string
}

export const H2: React.FC<TextProps> = ({ text }) => {
  return (
    <p className="mt-xl sub-title text-center">{ text }</p>
  );
};

export const Paragraph: React.FC<TextProps> = ({ text }) => {
  return (
    <p className="mt-md content">{ text }</p>
  );
};

