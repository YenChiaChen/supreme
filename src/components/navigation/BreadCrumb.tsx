import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex gap-2 items-center text-[#5b5b5b] font-light">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <FontAwesomeIcon icon={faChevronRight} />}
          {item.href ? (
            <Link to={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <p>{item.label}</p>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
