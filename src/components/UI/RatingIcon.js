import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as starIconSVG } from '../../assets/images/svg/star.svg';

const propTypes = {
  rating: PropTypes.number.isRequired,
};

const RatingIconWrapper = styled.div`
  display: inline-flex;
  padding: 3px 5px;
  align-items: center;
  border-radius: 3px;
  justify-content: space-between;
  background-color: ${props => (props.rating < 3 ? '#ff9f00' : '#388e3c')};
`;

const RatingIconSVG = styled(starIconSVG)`
  width: 1rem;
  margin-left: 3px;
  & polygon {
    fill: #fff !important;
  }
`;

const RatingText = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
`;

const RatingIcon = ({ rating }) => {
  return (
    <RatingIconWrapper rating={rating}>
      <RatingText>{rating}</RatingText>
      <RatingIconSVG />
    </RatingIconWrapper>
  );
};

RatingIcon.propTypes = propTypes;

export default RatingIcon;
