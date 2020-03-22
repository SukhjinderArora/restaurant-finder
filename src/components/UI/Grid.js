import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20rem, auto);
  gap: 0 1rem;
  justify-items: center;
  padding-top: 2rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 499px) {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    align-items: center;
  }
`;

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

Grid.propTypes = propTypes;

export default Grid;
