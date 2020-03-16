/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getRestaurant } from '../../../store/actions/restaurantsAction';
import getReviews from '../../../store/actions/reviewsAction';

import Spinner from '../../UI/Spinner';
import Header from './Header';
import Overview from './Overview';
import Reviews from '../../reviews/Reviews';

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
  const { reviews } = useSelector(state => state.reviews);
  const {
    name,
    thumb,
    user_rating,
    establishment,
    cuisines,
    location,
    timings,
    highlights,
  } = restaurant;

  useEffect(() => {
    dispatch(getRestaurant(id));
    dispatch(getReviews(id));
  }, [id, dispatch]);

  if (error) return <div>Error</div>;
  if (loading || !restaurant.id) return <Spinner />;
  return (
    <Wrapper>
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
      <Reviews reviews={reviews} />
    </Wrapper>
  );
};

export default Restaurant;
