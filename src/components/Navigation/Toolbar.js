import React from 'react';
import styled from 'styled-components';

import ToggleButton from '../UI/ToggleButton';
import Logo from '../UI/Logo';
import SearchButton from '../UI/SearchButton';

const ToolbarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid #e4e4e4b5;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: #fff;
  @media (min-width: 500px) {
    display: none;
  }
`;

const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <ToggleButton />
      <Logo to="/">Restaurant Finder</Logo>
      <SearchButton />
    </ToolbarWrapper>
  );
};

export default Toolbar;
