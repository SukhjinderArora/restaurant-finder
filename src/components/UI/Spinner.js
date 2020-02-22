import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: block;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  padding-top: 5rem;
  &::after {
    content: ' ';
    display: block;
    width: 100px;
    height: 100px;
    margin: 1px;
    border-radius: 50%;
    border: 7px solid #fc8019;
    border-color: #fc8019 transparent #fc8019 transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
  @media (max-width: 499px) {
    width: 50px;
    height: 50px;
    border-width: 3px;
  }
`;

export default Spinner;
