import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../navigation/Footer';
import Nav from '../navigation/NavBar';
import { NavMega } from '../navigation/NavMega';

import Navbar from '../navigation/NavBarR';


const menuItems = [
  {
    "title": "幸福企業",
    "href": "#",
    "subMenu": [
      {
        "title": "人力資源分布",
        "href": "#"
      },
      {
        "title": "友善職場",
        "href": "#",
        "subMenu": [
          {
            "title": "職業安全衛生",
            "href": "/enterprise/hr-distribution"
          },
          {
            "title": "健康職場",
            "href": "#"
          },
          {
            "title": "人權政策",
            "href": "#"
          }
        ]
      },
      {
        "title": "特別報導",
        "href": "#"
      }
    ]
  }
]


const Layout: React.FC = () => {
  return (
    <div className=''>
      <Navbar items={menuItems} />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;