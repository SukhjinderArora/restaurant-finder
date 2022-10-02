import PropTypes from 'prop-types';
import styled from 'styled-components';

import Review from './review/Review';

const Reviews = ({ reviews, loadMoreReviewsHandler, hasMore }) => {
  return (
    <Wrapper>
      <Header>Reviews</Header>
      <ReviewsContainer>
        {reviews.map((review) => (
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
      {hasMore && (
        <LoadMoreButton onClick={loadMoreReviewsHandler}>
          Load More Reviews
        </LoadMoreButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  @media (max-width: 499px) {
    margin-top: 2rem;
    padding: 0 1rem;
  }
`;

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  @media (max-width: 499px) {
    font-size: 2.5rem;
  }
`;

const ReviewsContainer = styled.div`
  border: 1px solid #f0f0f0;
  border-bottom: none;
  margin-top: 2rem;
  @media (max-width: 499px) {
    margin-top: 1rem;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  background: #fc8019;
  color: #fff;
  font-family: inherit;
  font-size: 1.4rem;
  border: 1px solid transparent;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    color: #fc8019;
    border: 1px solid #fc8019;
  }
`;

Reviews.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMoreReviewsHandler: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};
export default Reviews;
