import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search-icon.svg';

const propTypes = {
  input: PropTypes.string.isRequired,
  onInputChangeHandler: PropTypes.func.isRequired,
  onFormSubmitHandler: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
};

const Form = styled.form`
  width: 60rem;
  margin: 0 auto;
  position: relative;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  width: 100%;
  padding: 1.5rem 1rem;
  border: 0;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  transition: box-shadow 0.2s;
  :focus {
    outline: 0;
    box-shadow: 0 1px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 0 1rem;
  cursor: pointer;
`;

const SearchIcon = styled(SearchIconSVG)`
  fill: #5f5e5e;
  width: 2.4rem;
  height: 2.4rem;
`;

const InputClearButton = styled.button`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  color: #5f5e5e;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 5rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover {
    color: #fc8019;
  }
  &:focus {
    outline: none;
  }
`;

const SearchForm = ({
  input,
  onInputChangeHandler,
  onFormSubmitHandler,
  clearInput,
}) => {
  return (
    <Form onSubmit={onFormSubmitHandler}>
      <Input
        type="text"
        placeholder="Search for a Restaurant"
        value={input}
        onChange={onInputChangeHandler}
      />
      {input && <InputClearButton onClick={clearInput}>clear</InputClearButton>}
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

SearchForm.propTypes = propTypes;

export default SearchForm;
