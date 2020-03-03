import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Wrapper = styled.div`
  max-width: 30rem;
  width: 100%;
`;

const Sidebar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Sidebar.propTypes = propTypes;

export default Sidebar;
