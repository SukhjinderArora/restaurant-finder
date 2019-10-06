import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as SearchIconSVG } from '../../assets/images/svg/search.svg';

const Form = styled.form`
  width: 60rem;
  margin: 0 auto;
  margin-top: 10rem;
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
  padding: 0 5px;
  cursor: pointer;
`;

const SearchIcon = styled(SearchIconSVG)`
  fill: #5f5e5e;
  width: 2.4rem;
  height: 2.4rem;
`;

const SearchForm = () => {
  const [input, setInput] = useState('');
  const onSubmitSearchHandler = () => {};
  const onInputChangeHandler = e => {
    setInput(e.target.value);
  };
  return (
    <Form onSubmit={onSubmitSearchHandler}>
      <Input
        type="text"
        placeholder="Search for a Restaurant or a dish"
        value={input}
        onChange={onInputChangeHandler}
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

export default SearchForm;
