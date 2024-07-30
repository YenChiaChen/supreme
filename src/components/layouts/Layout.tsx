import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../navigation/Footer';
import Nav from '../navigation/NavBar';
import { NavMega } from '../navigation/NavMega';


const Layout: React.FC = () => {
  return (
    <div className=''>
     <Nav />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;