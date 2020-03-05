import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import queryString from 'query-string';

import Grid from './UI/Grid';
import Spinner from './UI/Spinner';
import Header from './Header';
import SideDrawer from './Navigation/SideDrawer';
import Filter from './Filter';
import RestaurantList from './RestaurantList';

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
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.object).isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  padding-bottom: 17rem;
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
  categories,
  cuisines,
  restaurants,
  hasMore,
  loading,
}) => {
  const location = useLocation();
  const { sortBy, orderBy } = queryString.parse(location.search);
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (hasMore) getRestaurants(cityID, [], sortBy);
    }
  };
  const handleScrollDebounced = useCallback(debounce(handleScroll, 300), [
    hasMore,
    cityID,
    sortBy,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDebounced);
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced, false);
    };
  });

  useEffect(() => {
    if (userLocated) {
      getCategories(cityID);
      getCuisines(cityID);
    }
  }, [getCategories, getCuisines, cityID, userLocated]);

  useEffect(() => {
    clearRestaurants();
  }, [clearRestaurants, cityID, sortBy, orderBy]);

  useEffect(() => {
    if (userLocated) {
      getRestaurants(cityID, [], sortBy, orderBy);
    }
  }, [getRestaurants, cityID, userLocated, sortBy, orderBy]);

  const [sideDrawerOpen, setSideDrawer] = useState(false);
  const sideDrawerHandler = open => {
    setSideDrawer(open);
  };

  if (locationLoading) return <Spinner />;
  if (locationError) return <div>Error getting location</div>;
  if (!userLocated) return <Redirect to="/location" />;
  return (
    <Wrapper>
      <Header setSideDrawerOpen={sideDrawerHandler} />
      {restaurants.length === 0 && <Spinner />}
      <Grid>
        <RestaurantList restaurants={restaurants} />
      </Grid>
      {hasMore && loading && <Spinner />}
      <SideDrawer
        showSideDrawer={sideDrawerOpen}
        setSideDrawerOpen={sideDrawerHandler}
      >
        <Filter />
      </SideDrawer>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    locationLoading: state.location.locationLoading,
    locationError: state.location.locationError,
    userLocated: !!state.location.userLocation.id,
    cityID: state.location.userLocation.id || 0,
    categories: state.filter.categories,
    cuisines: state.filter.cuisines,
    restaurants: state.restaurants.restaurants,
    hasMore: state.restaurants.hasMore,
    loading: state.restaurants.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: cityID =>
      dispatch(filtersAction.getRestaurantCategories(cityID)),
    getCuisines: cityID => dispatch(filtersAction.getCusines(cityID)),
    getRestaurants: (cityID, cuisines = [], sortBy = '', orderBy = '') =>
      dispatch(
        restaurantsAction.getRestaurants(cityID, cuisines, sortBy, orderBy)
      ),
    clearRestaurants: () => dispatch(restaurantsAction.clearRestaurants()),
  };
};

Restaurants.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
