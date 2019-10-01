import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

import Backdrop from '../UI/Backdrop';

const propTypes = {
  showSideDrawer: Proptypes.bool.isRequired,
  setSideDrawerOpen: Proptypes.func.isRequired,
};

const StyledSideDrawer = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  box-shadow: 0px 0 10px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: transform ease-in 0.3s;
  transform: translateX(${props => (props.showSideDrawer ? '0' : '100%')});
`;

const SideDrawer = ({ showSideDrawer, setSideDrawerOpen }) => {
  return (
    <>
      <Backdrop
        showBackdrop={showSideDrawer}
        setBackdropVisible={setSideDrawerOpen}
      />
      <StyledSideDrawer showSideDrawer={showSideDrawer} />
    </>
  );
};

SideDrawer.propTypes = propTypes;

export default SideDrawer;
