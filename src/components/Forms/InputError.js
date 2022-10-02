import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputError = ({ errorMessage }) => {
  return (
    <ErrorBox>
      <ErrorText>{errorMessage}</ErrorText>
    </ErrorBox>
  );
};

const ErrorBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #fa4a5b;
  padding: 1.5rem 1rem;
  margin-top: 0.5rem;
`;

const ErrorText = styled.p`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
`;

InputError.propTypes = { errorMessage: PropTypes.string.isRequired };

export default InputError;
