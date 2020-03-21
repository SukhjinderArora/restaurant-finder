import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

import Backdrop from '../UI/Backdrop';

const propTypes = {
  showSideDrawer: Proptypes.bool.isRequired,
  setSideDrawerOpen: Proptypes.func.isRequired,
  direction: Proptypes.string.isRequired,
  children: Proptypes.element.isRequired,
};

const StyledSideDrawer = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${props => (props.direction === 'right' ? 0 : '')};
  left: ${props => (props.direction === 'left' ? 0 : '')};
  z-index: 500;
  box-shadow: 0px 0 10px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: transform ease-in 0.3s;
  transform: translateX(
    ${props => {
      if (props.showSideDrawer) return '0';
      if (props.direction === 'right') return '100%';
      return '-100%';
    }}
  );
  @media (max-width: 499px) {
    /* max-width: 70%;
    width: 28rem; */

    max-width: 80%;
    width: 30rem;
  }
`;

const SideDrawer = ({
  showSideDrawer,
  setSideDrawerOpen,
  direction,
  children,
}) => {
  return (
    <>
      <Backdrop
        showBackdrop={showSideDrawer}
        setBackdropVisible={setSideDrawerOpen}
      />
      <StyledSideDrawer showSideDrawer={showSideDrawer} direction={direction}>
        {children}
      </StyledSideDrawer>
    </>
  );
};

SideDrawer.propTypes = propTypes;

export default SideDrawer;
