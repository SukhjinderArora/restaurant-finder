import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  padding-top: 1rem;
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
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Heading>{children}</Heading>
      <NavList>
        <ListItem>Cost</ListItem>
        <ListItem>Rating</ListItem>
        <ListItem>Filters</ListItem>
      </NavList>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;

export default Header;
