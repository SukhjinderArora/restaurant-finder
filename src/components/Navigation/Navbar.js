import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search.svg';
import { ReactComponent as LocationIconSVG } from '../../assets/images/svg/location.svg';

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

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  cursor: pointer;
  text-decoration: none;
`;

const SearchIcon = styled(SearchIconSVG)`
  fill: rgba(0, 0, 0, 0.7);
  width: 2.4rem;
  height: 2.4rem;
  ${NavigationLink}:hover & {
    fill: #fc8019;
  }
`;

const LocationIcon = styled(LocationIconSVG)`
  fill: rgba(0, 0, 0, 0.7);
  width: 2.4rem;
  height: 2.4rem;
  ${NavigationLink}:hover & {
    fill: #fc8019;
  }
`;

const NavText = styled.span`
  font-size: 1.6rem;
  margin-left: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  ${NavigationLink}:hover & {
    color: #fc8019;
  }
`;

const Navbar = ({ setSideDrawerOpen }) => {
  const openSideDrawer = e => {
    e.preventDefault();
    setSideDrawerOpen(true);
  };
  return (
    <Navigation>
      <Logo to="/">Restaurant Finder</Logo>
      <NavList>
        <li>
          <NavigationLink to="/search">
            <SearchIcon />
            <NavText>Search</NavText>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/" onClick={openSideDrawer}>
            <LocationIcon />
            <NavText>Your Location</NavText>
          </NavigationLink>
        </li>
      </NavList>
    </Navigation>
  );
};

Navbar.propTypes = propTypes;

export default Navbar;
