import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleButton = ({ onClickHandler }) => {
  return (
    <StyledToggleButton onClick={onClickHandler}>
      <span />
      <span />
      <span />
    </StyledToggleButton>
  );
};

const StyledToggleButton = styled.button`
  display: block;
  background-color: #fff;
  border: none;
  cursor: pointer;
  & span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #fc8019;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

ToggleButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

export default ToggleButton;
