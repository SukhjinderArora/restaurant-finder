import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Review from './review/Review';

const propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Wrapper = styled.section`
  margin-top: 3rem;
`;

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`;

const ReviewsContainer = styled.div`
  border: 1px solid #f0f0f0;
  border-bottom: none;
  margin-top: 2rem;
`;

const Reviews = ({ reviews }) => {
  return (
    <Wrapper>
      <Header>Reviews</Header>
      <ReviewsContainer>
        {reviews.map(review => (
          <Review
            rating={review.review.rating}
            ratingText={review.review.rating_text}
            review={review.review.review_text}
            reviewTime={review.review.review_time_friendly}
            userName={review.review.user.name}
            key={review.review.id}
          />
        ))}
      </ReviewsContainer>
    </Wrapper>
  );
};

Reviews.propTypes = propTypes;
export default Reviews;
