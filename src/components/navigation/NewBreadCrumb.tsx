import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItem = {
  title: string;
  link: string;
  dropdown?: NavItem[];
  children?: NavItem[];
};

type BreadcrumbsProps = {
  items: NavItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const findBreadcrumbs = (items: NavItem[], pathnames: string[], breadcrumbPath: NavItem[] = []): NavItem[] => {
    for (const item of items) {
      if (item.link === `/${pathnames.join('/')}`) {
        return [...breadcrumbPath, item];
      }
      if (item.dropdown) {
        const found = findBreadcrumbs(item.dropdown, pathnames, [...breadcrumbPath, item]);
        if (found.length) return found;
      }
      if (item.children) {
        const found = findBreadcrumbs(item.children, pathnames, [...breadcrumbPath, item]);
        if (found.length) return found;
      }
    }
    return [];
  };

  const breadcrumbs = findBreadcrumbs(items, pathnames);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span>{crumb.title}</span>
            ) : (
              <Link to={crumb.link}>{crumb.title}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
