import { title } from 'process';
import React, { useState } from 'react';

interface Segment {
  value: number; // Numerical value for the segment
  color?: string; // Optional: Color of the segment (if not provided, will use default palette)
  name: string; // Name of the data for the tooltip
}

interface MultiRingChartProps {
  size: number; // Size of the chart
  strokeWidth: number; // Thickness of the outer ring
  segments: Segment[]; // Array of segments with value, color (optional), name, and unit
  backgroundColor?: string; // Background color of the ring
  gap?: number; // Gap between the segments
  title: string; //Title of the chart
  unit?: string;
}

const RingChart: React.FC<MultiRingChartProps> = ({
  size,
  strokeWidth,
  segments,
  backgroundColor = "#ffffff",
  gap = 2,
  title,
  unit= ""
}) => {
  const [hoveredSegment, setHoveredSegment] = useState<Segment | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colorPalette = ['#FF507C', '#FF7C9D', '#FFA7BD', '#FFD3DE'];

  const totalValue = segments.reduce((sum, segment) => sum + segment.value, 0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercentage = 0;

  const handleMouseMove = (
    e: React.MouseEvent<SVGCircleElement, MouseEvent>,
    segment: Segment
  ) => {
    setHoveredSegment(segment);
    
    const rect = (e.target as SVGElement).getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top, 
    });
  };

  const handleMouseLeave = () => {
    setHoveredSegment(null);
  };

  return (
    <div className='w-fit h-fit flex flex-col items-center'>
    <p className='text-center tracking-wide mb-2'>{title}</p>
    <div style={{ position: 'relative' }} className='w-fit h-fit'>
    <div className="absolute w-full h-full left-0 top-0 p-[25%] pointer-events-none">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col gap-4 w-full">
          {segments.map((segment, index) => {
            const percentage = (segment.value / totalValue) * 100;
            return (
              <div className="flex justify-between items-end" key={index}>
                <p className='text-sm text-gray-400'>{segment.name}</p>
                <p className='font-bold text-pink'>{percentage.toFixed(1)}<span className='text-xs ml-1'>%</span></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <svg
      width={size + strokeWidth * 2}
      height={size + strokeWidth * 2}
      viewBox={`0 0 ${size + strokeWidth * 2} ${size + strokeWidth * 2}`}
    >
      <circle
        cx={(size + strokeWidth * 2) / 2}
        cy={(size + strokeWidth * 2) / 2}
        r={radius}
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {segments.map((segment, index) => {
        const percentage = (segment.value / totalValue) * 100;
        const strokeDasharray = (percentage / 100) * circumference - gap;
        const strokeDashoffset =
          circumference - (accumulatedPercentage / 100) * circumference;
  
        accumulatedPercentage += percentage;
  
        const isHovered = hoveredSegment === segment;
        const dynamicStrokeWidth = isHovered ? strokeWidth + 8 : strokeWidth;
  
        // Use provided color or default to the color from the palette
        const color = segment.color || colorPalette[index % colorPalette.length];
  
        return (
          <circle
            key={index}
            cx={(size + strokeWidth * 2) / 2}
            cy={(size + strokeWidth * 2) / 2}
            r={radius}
            stroke={color}
            strokeWidth={dynamicStrokeWidth}
            fill="none"
            strokeDasharray={`${strokeDasharray} ${circumference - strokeDasharray}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${(size + strokeWidth * 2) / 2} ${(size + strokeWidth * 2) / 2})`}
            onMouseMove={(e) => handleMouseMove(e, segment)}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'stroke-width 0.3s ease' }}
          />
        );
      })}
    </svg>
  
    {hoveredSegment && (
      <div
        style={{
          position: 'absolute',
          top: mousePos.y - 30,
          left: mousePos.x + 10,
          backgroundColor: '#fff',
          padding: '5px 10px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          pointerEvents: 'none',
          transition: 'opacity 0.5s ease',
          whiteSpace: 'nowrap',
        }}
      >
        <strong>{hoveredSegment.name}</strong>: {hoveredSegment.value} {unit &&(unit)}
      </div>
    )}
  </div>

  <div className="flex gap-4 mt-4 flex-wrap">
  {segments.map((segment, index) => {
    const color = segment.color || colorPalette[index % colorPalette.length];
    return (
      <div className="flex items-center" key={index}>
        <div
          className="w-4 h-4 rounded mr-2"
          style={{ backgroundColor: color }}
        ></div>
        <p>{segment.name}</p>
      </div>
    );
  })}
</div>

  </div>
  
  );
};

export default RingChart;
