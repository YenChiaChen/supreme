import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../navigation/Footer';
import Navbar from '../navigation/NavBar';
import navItems from '../../data/nav.json'
import ScrollToTop from '../navigation/ScrollToTop';


const Layout: React.FC = () => {
  return (
    <div className='relative'>
      <Navbar items={navItems} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;