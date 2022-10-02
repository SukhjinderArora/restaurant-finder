import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNotFound = () => {
  return (
    <ErrorContainer>
      <ErrorText>Page not found</ErrorText>
      <ErrorDescription>
        Uh-oh! Looks like the page you are trying to access, doesn&apos;t exist.
        Please start afresh.
      </ErrorDescription>
      <HomeButton to="/">Go Home</HomeButton>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  text-align: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.h1`
  font-size: 3.4rem;
  color: #282c3f;
`;

const ErrorDescription = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin: 1rem 0;
  color: #93959f;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background-color: #fc8019;
  color: #fff;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #fc8019;
    border: 1px solid #fc8019;
  }
`;

export default PageNotFound;
