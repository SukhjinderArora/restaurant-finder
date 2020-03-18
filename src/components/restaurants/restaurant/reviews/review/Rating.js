import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingIcon from '../../../../UI/RatingIcon';

const propTypes = {
  rating: PropTypes.number.isRequired,
  ratingText: PropTypes.string.isRequired,
};

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RatingText = styled.p`
  margin-left: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #212121;
`;

const Rating = ({ rating, ratingText }) => {
  return (
    <RatingWrapper>
      <RatingIcon rating={rating} />
      <RatingText>{ratingText}</RatingText>
    </RatingWrapper>
  );
};

Rating.propTypes = propTypes;

export default Rating;
