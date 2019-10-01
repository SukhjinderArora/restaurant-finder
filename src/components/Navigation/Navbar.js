import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SearchIcon from '../../assets/images/svg/search.svg';
import LocationIcon from '../../assets/images/svg/location.svg';

const propTypes = {
  setSideDrawerOpen: PropTypes.func.isRequired,
};

const Navigation = styled.nav`
  display: flex;
  height: 7rem;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 400;
  color: #3e3d3d;
  :hover {
    color: #fc8019;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  cursor: pointer;
`;

const NavItemText = styled.span`
  font-size: 1.6rem;
  margin-left: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  ${NavItem}:hover & {
    color: #fc8019;
  }
`;

const Navbar = ({ setSideDrawerOpen }) => {
  return (
    <Navigation>
      <Logo to="/">Restaurant Finder</Logo>
      <NavList>
        <NavItem>
          <img src={SearchIcon} alt="Search Icon" />
          <NavItemText>Search</NavItemText>
        </NavItem>
        <NavItem>
          <img src={LocationIcon} alt="Location Icon" />
          <NavItemText onClick={() => setSideDrawerOpen(true)}>
            Your Location
          </NavItemText>
        </NavItem>
      </NavList>
    </Navigation>
  );
};

Navbar.propTypes = propTypes;

export default Navbar;
