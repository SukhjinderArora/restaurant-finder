import React from 'react';
import styled from 'styled-components';

import Logo from '../UI/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  display: flex;
  height: 7rem;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 499px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Navigation>
      <Logo to="/">Restaurant Finder</Logo>
      <NavigationItems />
    </Navigation>
  );
};

export default Navbar;
