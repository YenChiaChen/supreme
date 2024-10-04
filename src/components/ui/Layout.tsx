import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../nav/NavBar';
import navItems from '../../data/nav.json'
import Footer from '../nav/Footer';

const Layout: React.FC = () => {
  return (
    <div className='relative'>
      <NavBar items={navItems} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;