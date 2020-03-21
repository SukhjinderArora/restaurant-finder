import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search.svg';

const StyledSearchButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled(SearchIconSVG)`
  width: 1.8rem;
  height: 1.8rem;
  fill: #fc8019;
`;

const SearchButton = () => {
  const history = useHistory();
  const searchButtonHandler = () => {
    history.push('/search');
  };
  return (
    <StyledSearchButton onClick={searchButtonHandler}>
      <SearchIcon />
    </StyledSearchButton>
  );
};

export default SearchButton;
