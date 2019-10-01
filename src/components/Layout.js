import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navigation/Navbar';
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
      <Navbar setSideDrawerOpen={sideDrawerHandler} />
      <SideDrawer
        showSideDrawer={sideDrawerOpen}
        setSideDrawerOpen={sideDrawerHandler}
      />
      {children}
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
