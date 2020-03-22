import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  formSubmitHandler: PropTypes.func.isRequired,
};

const Form = styled.form`
  height: 50px;
  display: flex;
  @media (max-width: 499px) {
    justify-content: center;
  }
`;

const Input = styled.input`
  font-family: inherit;
  height: 100%;
  width: 55rem;
  font-size: 1.6rem;
  padding: 1.5rem 1rem;
  border: 1px groove #fc8019;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.8);
  background-color: #fff;
  color: #ccc;
  color: #000;
  transition: all 0.2s;
  &:focus {
    box-shadow: 0 1px 4px 4px rgba(0, 0, 0, 0.1);
    outline: 0;
  }
  @media (max-width: 499px) {
    width: 100%;
  }
`;

const SubmitButton = styled.button`
  font-family: inherit;
  height: 100%;
  border: 1px solid transparent;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background-color: #fc8019;
  color: #fff;
  font-weight: 700;
  margin-left: 4px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    border: 1px solid #fc8019;
    color: #fc8019;
  }
  &:focus {
    outline: none;
  }
`;

const InputClearButton = styled.button`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  color: #5f5e5e;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 15px;
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

const LocationForm = ({
  text,
  handleChange,
  clearInput,
  formSubmitHandler,
}) => {
  return (
    <Form autoComplete="off" action="" onSubmit={formSubmitHandler}>
      <div style={{ position: 'relative' }}>
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your city to set location"
        />
        {text && (
          <InputClearButton onClick={clearInput}>clear</InputClearButton>
        )}
      </div>
      <SubmitButton type="submit">Find Food</SubmitButton>
    </Form>
  );
};

LocationForm.propTypes = propTypes;

export default LocationForm;
