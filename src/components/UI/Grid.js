import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20rem, auto);
  gap: 3rem 1rem;
  justify-items: center;
  align-items: center;
  padding-top: 2rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 499px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    & > div {
      width: 100%;
      height: 100%;
    }
  }
`;

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

Grid.propTypes = propTypes;

export default Grid;
