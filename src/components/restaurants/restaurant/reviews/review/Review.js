import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Rating from './Rating';
import UserInfo from './UserInfo';

const propTypes = {
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingText: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  reviewTime: PropTypes.string.isRequired,
};

const ReviewWrapper = styled.div`
  padding: 2.4rem;
  border-bottom: 1px solid #f0f0f0;
  @media (max-width: 499px) {
    padding: 2rem;
  }
`;

const ReviewText = styled.p`
  font-size: 1.4rem;
  color: #212121;
  line-height: 1.6;
  margin: 1.2rem 0;
  white-space: pre-line;
`;

const ReadMore = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #2874f0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Review = ({ rating, ratingText, review, reviewTime, userName }) => {
  const [showFullReview, setFullReview] = useState(false);

  const onReadMoreClickHandler = e => {
    e.preventDefault();
    setFullReview(true);
  };

  const longReview = review.replace(/\s\s/gi, '\n');
  const shortReview = `${review.substring(0, 499)}...`.replace(/\s\s/gi, '\n');
  let reviewParagraph;
  if (review.length > 499) {
    reviewParagraph = (
      <ReviewText>
        <span>{showFullReview ? longReview : shortReview}</span>
        {!showFullReview && (
          <ReadMore onClick={onReadMoreClickHandler}>Read More</ReadMore>
        )}
      </ReviewText>
    );
  } else {
    reviewParagraph = <ReviewText>{longReview}</ReviewText>;
  }
  return (
    <ReviewWrapper>
      <Rating rating={rating} ratingText={ratingText} />
      {reviewParagraph}
      <UserInfo userName={userName} reviewTime={reviewTime} />
    </ReviewWrapper>
  );
};

Review.propTypes = propTypes;

export default Review;
