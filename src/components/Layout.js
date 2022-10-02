import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Toolbar from './Navigation/Toolbar';
import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import SideDrawer from './Navigation/SideDrawer';
import NavigationItems from './Navigation/NavigationItems';

const Layout = () => {
  const [sideDrawerOpen, setSideDrawer] = useState(false);
  const sideDrawerHandler = (open) => {
    setSideDrawer(open);
  };

  return (
    <>
      <Toolbar setSideDrawerOpen={sideDrawerHandler} />
      <Navbar />
      <SideDrawer
        showSideDrawer={sideDrawerOpen}
        setSideDrawerOpen={sideDrawerHandler}
        direction="left"
      >
        <nav>
          <NavigationItems setSideDrawerOpen={sideDrawerHandler} />
        </nav>
      </SideDrawer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
