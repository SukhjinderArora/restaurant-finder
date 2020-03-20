/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getRestaurant } from '../../../store/actions/restaurantsAction';
import { getReviews, clearReviews } from '../../../store/actions/reviewsAction';

import Spinner from '../../UI/Spinner';
import Modal from '../../UI/Modal';
import Header from './Header';
import Overview from './Overview';
import Photos from './Photos';
import Photo from './Photo';
import Reviews from './reviews/Reviews';

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  margin-top: 5rem;
`;

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, restaurant } = useSelector(
    state => state.restaurants
  );
  const { reviews, totalReviews, offset } = useSelector(state => state.reviews);
  const hasMoreReviews = totalReviews > 10 && offset <= 10;
  const {
    name,
    thumb,
    user_rating,
    establishment,
    cuisines,
    location,
    timings,
    highlights,
    photos,
  } = restaurant;

  useEffect(() => {
    dispatch(getRestaurant(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(clearReviews());
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [id, dispatch]);

  const loadMoreReviewsHandler = e => {
    e.preventDefault();
    if (hasMoreReviews) {
      dispatch(getReviews(id));
    }
  };

  const [showModal, setModalState] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const setModal = (show, imgUrl = '') => {
    setImageUrl(imgUrl);
    setModalState(show);
  };

  if (error) return <div>Error</div>;
  if (loading || !restaurant.id) return <Spinner />;
  return (
    <Wrapper>
      {showModal && (
        <Modal showModal={showModal} setModal={setModal}>
          <Photo imageUrl={imageUrl} />
        </Modal>
      )}
      <Header
        imageUrl={thumb}
        title={name}
        rating={user_rating.aggregate_rating}
        location={`${location.locality}, ${location.city}`}
        categories={establishment.join(', ')}
        cuisines={cuisines}
      />
      <Overview
        address={location.address}
        phoneNumber={restaurant.phone_numbers}
        timings={timings}
        highlights={highlights}
        averageCost={`${restaurant.currency}${restaurant.average_cost_for_two}`}
      />
      {photos && <Photos photos={photos} setModal={setModal} />}
      {reviews.length > 0 && (
        <Reviews
          reviews={reviews}
          hasMore={hasMoreReviews}
          loadMoreReviewsHandler={loadMoreReviewsHandler}
        />
      )}
    </Wrapper>
  );
};

export default Restaurant;
