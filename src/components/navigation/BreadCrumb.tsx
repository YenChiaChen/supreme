import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex gap-2 items-center   bg-gray w-fit px-6 py-2 rounded-xl">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <FontAwesomeIcon icon={faChevronRight} className='px-3 text-sm text-[#bdbdbd]'  />}
          {item.href ? (
            <Link to={item.href} className="hover:border-orange py-1 border-b-[2px] border-transparent duration-300 text-[#5b5b5b]">
              {item.label}
            </Link>
          ) : (
            <p className='py-1 border-b-[2px] border-transparent text-[#a8a7a7]'>{item.label}</p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
