import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ReactComponent as SearchIconSVG } from '../../../assets/images/svg/search-icon.svg';
import { ReactComponent as LocationIconSVG } from '../../../assets/images/svg/location-icon.svg';

const propTypes = {
  setSideDrawerOpen: PropTypes.func,
};

const defaultProps = {
  setSideDrawerOpen: () => {},
};

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 16px;
    margin-top: 1rem;
  }
`;

const NavigationItem = styled.li`
  list-style: none;
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
  @media (max-width: 499px) {
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;
  }
`;

const LinkText = styled.span`
  font-size: 1.6rem;
  color: inherit;
  ${NavigationLink}:hover & {
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

const LocationFlag = styled.img`
  width: 2rem;
  margin-left: 1rem;
`;

const NavigationItems = ({ setSideDrawerOpen }) => {
  const { userLocation } = useSelector(state => state.location);
  const userLocated = !!userLocation.id;
  return (
    <NavigationList>
      <NavigationItem onClick={() => setSideDrawerOpen(false)}>
        <NavigationLink to="/search">
          <SearchIcon />
          <LinkText>Search</LinkText>
        </NavigationLink>
      </NavigationItem>
      <NavigationItem onClick={() => setSideDrawerOpen(false)}>
        <NavigationLink to="/location" exact>
          <LocationIcon />
          <LinkText>
            {userLocated
              ? `${userLocation.name}, ${userLocation.country_name}`
              : 'Your Location'}
          </LinkText>
          {userLocated && (
            <LocationFlag src={userLocation.country_flag_url} alt="Flag" />
          )}
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  );
};

NavigationItems.propTypes = propTypes;
NavigationItems.defaultProps = defaultProps;

export default NavigationItems;
