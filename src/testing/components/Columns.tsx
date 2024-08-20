import React from 'react';

interface ColumnsProps {
  children: React.ReactNode;
    columns?: number; 
    gap?: string;
    className?: string; 
}

const Columns: React.FC<ColumnsProps> = ({ children, columns = 2, gap = 'gap-4', className = '' }) => {
  return (
    <div className={`grid grid-cols-${columns} ${gap} ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="col-span-1">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Columns;
