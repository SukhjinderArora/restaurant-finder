import PropTypes from 'prop-types';
import styled from 'styled-components';

import RatingIcon from '../../../../UI/RatingIcon';

const Rating = ({ rating, ratingText }) => {
  return (
    <RatingWrapper>
      <RatingIcon rating={rating} />
      <RatingText>{ratingText}</RatingText>
    </RatingWrapper>
  );
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

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingText: PropTypes.string.isRequired,
};

export default Rating;
