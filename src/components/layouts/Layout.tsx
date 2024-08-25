import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../navigation/Footer';
import Navbar from '../navigation/NavBar';
import navItems from '../../data/nav.json'
import Breadcrumbs from '../navigation/NewBreadCrumb';


const Layout: React.FC = () => {
  return (
    <div className=''>
      <Navbar items={navItems} />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;