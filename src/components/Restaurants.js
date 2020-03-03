import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Grid from './UI/Grid';
import Card from './UI/Card';
import Spinner from './UI/Spinner';
import Header from './Header';

import * as filtersAction from '../store/actions/filtersAction';
import * as restaurantsAction from '../store/actions/restaurantsAction';

const propTypes = {
  userLocated: PropTypes.bool.isRequired,
  locationLoading: PropTypes.bool.isRequired,
  locationError: PropTypes.bool.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCuisines: PropTypes.func.isRequired,
  getRestaurants: PropTypes.func.isRequired,
  clearRestaurants: PropTypes.func.isRequired,
  cityID: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.object).isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Wrapper = styled.div`
  /* display: flex; */
`;

const Restaurants = ({
  userLocated,
  locationLoading,
  locationError,
  getCategories,
  getCuisines,
  getRestaurants,
  clearRestaurants,
  cityID,
  city,
  country,
  categories,
  cuisines,
  restaurants,
}) => {
  useEffect(() => {
    if (userLocated) {
      getCategories(cityID);
      getCuisines(cityID);
    }
  }, [getCategories, getCuisines, cityID, userLocated]);

  useEffect(() => {
    clearRestaurants();
  }, [clearRestaurants, cityID]);

  useEffect(() => {
    if (userLocated) {
      getRestaurants(cityID, [], '');
    }
  }, [getRestaurants, cityID, userLocated]);

  if (locationLoading) return <Spinner />;
  if (locationError) return <div>Error getting location</div>;
  if (!userLocated) return <Redirect to="/location" />;
  const restaurantList = restaurants.map(restaurant => (
    <Card
      name={restaurant.restaurant.name}
      key={restaurant.restaurant.id}
      imageUrl={restaurant.restaurant.featured_image}
      cuisines={restaurant.restaurant.cuisines}
      rating={restaurant.restaurant.user_rating.aggregate_rating}
      cost={`${restaurant.restaurant.currency}${restaurant.restaurant.average_cost_for_two}`}
      location={`${restaurant.restaurant.location.locality}, ${restaurant.restaurant.location.city}`}
    />
  ));
  return (
    <Wrapper>
      <Header>{`Restaurants in ${city}, ${country}`}</Header>
      {restaurants.length > 0 ? <Grid>{restaurantList}</Grid> : <Spinner />}
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    locationLoading: state.location.locationLoading,
    locationError: state.location.locationError,
    userLocated: !!state.location.userLocation.id,
    cityID: state.location.userLocation.id || 0,
    city: state.location.userLocation.name || '',
    country: state.location.userLocation.country_name || '',
    categories: state.filter.categories,
    cuisines: state.filter.cuisines,
    restaurants: state.restaurants.restaurants,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: cityID =>
      dispatch(filtersAction.getRestaurantCategories(cityID)),
    getCuisines: cityID => dispatch(filtersAction.getCusines(cityID)),
    getRestaurants: (cityID, cuisines = [], sortBy = '') =>
      dispatch(restaurantsAction.getRestaurants(cityID, cuisines, sortBy)),
    clearRestaurants: () => dispatch(restaurantsAction.clearRestaurants()),
  };
};

Restaurants.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
