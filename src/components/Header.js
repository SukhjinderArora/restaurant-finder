import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const propTypes = {
  setSideDrawerOpen: PropTypes.func.isRequired,
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #282c3f;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1.6rem;
`;

const ListItem = styled.li`
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: #fc8019;
  }
`;

const Link = styled(NavLink)`
  color: #000;
  text-decoration: none;
  &.selected,
  &:hover {
    color: #fc8019;
  }
`;

const Header = ({ setSideDrawerOpen }) => {
  const location = useSelector(state => state.location.userLocation);
  const { sortBy } = queryString.parse(useLocation().search);
  return (
    <StyledHeader>
      <Heading>
        {`Restaurants in ${location.name}, ${location.country_name}`}
      </Heading>
      <NavList>
        <ListItem>
          <Link
            to="/restaurants?sortBy=cost&orderBy=asc"
            activeClassName={sortBy === 'cost' ? 'selected' : ''}
          >
            Cost
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/restaurants?sortBy=rating&orderBy=desc"
            activeClassName={sortBy === 'rating' ? 'selected' : ''}
          >
            Rating
          </Link>
        </ListItem>
        <ListItem onClick={() => setSideDrawerOpen(true)}>Filters</ListItem>
      </NavList>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;

export default Header;
