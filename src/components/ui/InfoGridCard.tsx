import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface EmployeeCardProps {
  title: string;
  content: string;
  bgColor: string; 
  textColor: string;
  icon: IconProp;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ title, content, bgColor, textColor, icon }) => {
  return (
    <div className="grid grid-cols-8 gap-8 relative">
      <div className={`absolute left-0 top-0 px-4 py-2 ${bgColor} ${textColor} rounded-xl transform -translate-y-full z-10`}>
        {title}
      </div>
      <div className="draw-border w-[70%] h-[50px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full"></div>
      <div className="col-span-5 content pb-8">
        {content}
      </div>
      <div className={`col-span-3 w-full ${bgColor} rounded-xl flex justify-center items-center aspect-square`}>
        <FontAwesomeIcon icon={icon} className="h-[60px]" />
      </div>
    </div>
  );
};

interface InfoGridCardProps {
    items: EmployeeCardProps[];
  }
  
  const InfoGridCard: React.FC<InfoGridCardProps> = ({ items }) => {
    return (
      <div className="grid grid-cols-2 mt-36 gap-4 relative text-gray-800">
        {items.map((item, index) => (
          <EmployeeCard
            key={index}
            title={item.title}
            content={item.content}
            bgColor={item.bgColor}
            textColor={item.textColor}
            icon={item.icon}
          />
        ))}
      </div>
    );
  };
  
  export default InfoGridCard;
