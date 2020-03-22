import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { ReactComponent as FilterIconSVG } from '../../assets/images/svg/filter.svg';

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
  @media (max-width: 499px) {
    flex-direction: column;
    padding-bottom: 1rem;
    justify-content: center;
    align-items: stretch;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #282c3f;
  @media (max-width: 499px) {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 1.6rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: #fc8019;
  }
  display: flex;
  align-items: center;
  & span {
    color: #3d4152;
    font-weight: 700;
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

const FilterIcon = styled(FilterIconSVG)`
  fill: #fc8019;
  width: 2rem;
  height: 2rem;
  margin-left: 5px;
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
        <ListItem onClick={() => setSideDrawerOpen(true)}>
          <span>Filters</span>
          <FilterIcon />
        </ListItem>
      </NavList>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;

export default Header;
