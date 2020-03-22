import styled from 'styled-components';

const FormContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 499px) {
    top: 15%;
    left: 0;
    right: 0;
    transform: translate(0, 0);
  }
`;

export default FormContainer;
