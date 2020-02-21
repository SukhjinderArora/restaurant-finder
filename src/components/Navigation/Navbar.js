import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search-icon.svg';
import { ReactComponent as LocationIconSVG } from '../../assets/images/svg/location-icon.svg';

const propTypes = {
  userLocation: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country_id: PropTypes.number,
    country_name: PropTypes.string,
    country_flag_url: PropTypes.string,
  }).isRequired,
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
  font-weight: 700;
  color: #3e3d3d;
  :hover {
    color: #fc8019;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 3rem;
  cursor: pointer;
  text-decoration: none;
  &.active {
    color: #fc8019;
  }
`;

const SearchIcon = styled(SearchIconSVG)`
  width: 2rem;
  padding: 0.5rem;
  box-sizing: content-box;
  ${NavigationLink}:hover & {
    fill: #fc8019;
  }
  ${NavigationLink}.active & {
    fill: #fc8019;
  }
`;

const LocationIcon = styled(LocationIconSVG)`
  width: 3rem;
  ${NavigationLink}:hover & {
    fill: #fc8019;
  }
  ${NavigationLink}.active & {
    fill: #fc8019;
  }
`;

const LinkText = styled.span`
  font-size: 1.6rem;
  color: inherit;
  ${NavigationLink}:hover & {
    color: #fc8019;
  }
`;

const LocationFlag = styled.img`
  width: 2rem;
  margin-left: 1rem;
`;

const Navbar = ({ userLocation }) => {
  return (
    <Navigation>
      <Logo to="/">Restaurant Finder</Logo>
      <NavList>
        <li>
          <NavigationLink to="/search">
            <SearchIcon />
            <LinkText>Search</LinkText>
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/location" exact>
            <LocationIcon />
            <LinkText>
              {userLocation.id
                ? `${userLocation.name}, ${userLocation.country_name}`
                : 'Your Location'}
            </LinkText>
            {userLocation.id && (
              <LocationFlag src={userLocation.country_flag_url} alt="Flag" />
            )}
          </NavigationLink>
        </li>
      </NavList>
    </Navigation>
  );
};

const mapStateToProps = state => {
  return {
    userLocation: state.location.userLocation,
  };
};

Navbar.propTypes = propTypes;

export default connect(mapStateToProps)(Navbar);
