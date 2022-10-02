import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search.svg';

const SearchButton = () => {
  const navigate = useNavigate();
  const searchButtonHandler = () => {
    navigate('/search');
  };
  return (
    <StyledSearchButton onClick={searchButtonHandler}>
      <SearchIcon />
    </StyledSearchButton>
  );
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

export default SearchButton;
