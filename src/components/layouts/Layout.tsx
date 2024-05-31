import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../navigation/Nav';
import Footer from '../navigation/Footer';

const Layout: React.FC = () => {
  return (
    <div>
     <Nav />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;