import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CardData {
  title: string;
  description: string;
  icon: IconDefinition;
}

interface HoverCardProps {
  data: CardData;
  width?: string; 
  color?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ data, width = '33%', color="#FF8D50" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gray rounded-xl  duration-300 flex items-center justify-center group relative min-h-[450px] hover:shadow-xl ${isHovered ? 'w-[500px]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: isHovered ? '500px' : width, backgroundColor: isHovered ? color : '' }} 
    >
      <div className="flex flex-col gap-4 w-full items-center group-hover:hidden">
        <FontAwesomeIcon icon={data.icon} className="h-[50px]" style={{color: color}} />
        <p className="text-[18px] mt-4 tracking-wide">{data.title}</p>
      </div>
      <div
        className={`absolute inset-0 hidden group-hover:flex opacity-0 px-10 mt-24 text-white ${
          isHovered ? 'opacity-100 enter-duration' : 'opacity-0 exit-duration duration-[0]'
        }`}
      >
        <div className="text-left">
          <FontAwesomeIcon icon={data.icon} className="h-[50px] mb-6" />
          <p className="text-[32px] font-semibold tracking-wider mb-4">{data.title}</p>
          <hr />
          <p className="text-[15px] font-light tracking-wide mt-6 whitespace-pre-line">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
