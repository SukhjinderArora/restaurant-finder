import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search.svg';

const propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

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

const SearchButton = ({ onClickHandler }) => {
  return (
    <StyledSearchButton onClick={onClickHandler}>
      <SearchIcon />
    </StyledSearchButton>
  );
};

SearchButton.propTypes = propTypes;

export default SearchButton;
