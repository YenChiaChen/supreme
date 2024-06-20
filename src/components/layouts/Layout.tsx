import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../navigation/Footer';
import Nav from '../navigation/NavBar';

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