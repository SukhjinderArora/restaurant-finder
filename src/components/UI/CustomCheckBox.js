import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CheckBoxIconSVG } from '../../assets/images/svg/check.svg';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  checkBoxChangeHandler: PropTypes.func.isRequired,
};

const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const LabelText = styled.span`
  margin-left: 1.8rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.75);
  ${Label}:hover & {
    font-weight: 700;
  }
`;

const CheckBox = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  width: 12px;
  height: 12px;
  border: 1px solid #a9abb2;
  background-color: transparent;
  transform: translateY(-50%);
  display: inline-block;
  transition: border 0.3s;
  ${Input}:checked ~ & {
    border-color: transparent;
  }
`;

const CheckBoxIcon = styled(CheckBoxIconSVG)`
  fill: #fc8019;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) scale(0);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  ${Input}:checked ~ & {
    transform: translateY(-50%) scale(1);
  }
`;

const CustomCheckBox = ({
  id,
  name,
  value,
  selected,
  checkBoxChangeHandler,
}) => {
  return (
    <Label>
      <Input
        type="checkbox"
        id={id}
        name={name}
        value={id}
        checked={selected}
        onChange={e => checkBoxChangeHandler(id, value, e)}
      />
      <CheckBox />
      <CheckBoxIcon />
      <LabelText>{value}</LabelText>
    </Label>
  );
};

CustomCheckBox.propTypes = propTypes;

export default CustomCheckBox;
