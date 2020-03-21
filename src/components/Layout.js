import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Navigation/Toolbar';
import Navbar from './Navigation/Navbar';
import Footer from './Navigation/Footer';
import SideDrawer from './Navigation/SideDrawer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawer] = useState(false);
  const sideDrawerHandler = open => {
    setSideDrawer(open);
  };

  return (
    <>
      <Toolbar />
      <Navbar setSideDrawerOpen={sideDrawerHandler} />
      <SideDrawer
        showSideDrawer={sideDrawerOpen}
        setSideDrawerOpen={sideDrawerHandler}
      />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
