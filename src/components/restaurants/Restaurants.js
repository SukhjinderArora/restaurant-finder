/* eslint-disable react/forbid-prop-types */
import { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import queryString from 'query-string';

import Grid from '../UI/Grid';
import Spinner from '../UI/Spinner';
import Header from './Header';
import SideDrawer from '../Navigation/SideDrawer';
import Filter from '../Filter';
import RestaurantList from './RestaurantList';

import * as filtersAction from '../../store/actions/filtersAction';
import * as restaurantsAction from '../../store/actions/restaurantsAction';

const Restaurants = ({
  userLocated,
  locationLoading,
  locationError,
  getCuisines,
  getRestaurants,
  clearRestaurants,
  cityID,
  cuisines,
  selectedCuisines,
  restaurants,
  hasMore,
  loading,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sortBy, orderBy } = queryString.parse(location.search);
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      if (hasMore) getRestaurants(cityID, selectedCuisines, sortBy, orderBy);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScrollDebounced = useCallback(debounce(handleScroll, 500), [
    hasMore,
    cityID,
    sortBy,
    selectedCuisines,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDebounced);
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced, false);
    };
  }, [handleScrollDebounced]);

  useEffect(() => {
    if (userLocated) {
      getCuisines(cityID);
    }
  }, [getCuisines, cityID, userLocated]);

  useEffect(() => {
    clearRestaurants();
  }, [clearRestaurants, cityID, sortBy, orderBy, selectedCuisines]);

  useEffect(() => {
    if (userLocated) {
      getRestaurants(cityID, selectedCuisines, sortBy, orderBy);
    }
  }, [getRestaurants, cityID, userLocated, sortBy, orderBy, selectedCuisines]);

  const [sideDrawerOpen, setSideDrawer] = useState(false);
  const sideDrawerHandler = (open) => {
    setSideDrawer(open);
  };

  const viewRestaurantBtnHandler = (id, name, e) => {
    e.preventDefault();
    navigate(`/restaurant/${name.replace(/\s/gi, '-')}/${id}`, {
      state: {
        id,
      },
    });
  };

  if (locationLoading) return <Spinner />;
  if (locationError) return <div>Error getting location</div>;
  if (!userLocated) return <Navigate to="/location" />;
  return (
    <Wrapper>
      <Header setSideDrawerOpen={sideDrawerHandler} />
      {restaurants.length === 0 && loading && <Spinner />}
      <Grid>
        <RestaurantList
          restaurants={restaurants}
          viewButtonHandler={viewRestaurantBtnHandler}
        />
      </Grid>
      {hasMore && loading && <Spinner />}
      <SideDrawer
        showSideDrawer={sideDrawerOpen}
        setSideDrawerOpen={sideDrawerHandler}
        direction="right"
      >
        <Filter cuisines={cuisines} setSideDrawerOpen={sideDrawerHandler} />
      </SideDrawer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 17rem;
  @media (max-width: 499px) {
    padding-bottom: 5rem;
  }
`;

const mapStateToProps = (state) => {
  return {
    locationLoading: state.location.locationLoading,
    locationError: state.location.locationError,
    userLocated: !!state.location.userLocation.id,
    cityID: state.location.userLocation.id || 0,
    cuisines: state.filter.cuisines,
    selectedCuisines: state.filter.selectedCuisines,
    restaurants: state.restaurants.restaurants,
    hasMore: state.restaurants.hasMore,
    loading: state.restaurants.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCuisines: (cityID) => dispatch(filtersAction.getCusines(cityID)),
    getRestaurants: (cityID, cuisines = '', sortBy = '', orderBy = '') =>
      dispatch(
        restaurantsAction.getRestaurants(cityID, cuisines, sortBy, orderBy)
      ),
    clearRestaurants: () => dispatch(restaurantsAction.clearRestaurants()),
  };
};

Restaurants.propTypes = {
  userLocated: PropTypes.bool.isRequired,
  locationLoading: PropTypes.bool.isRequired,
  locationError: PropTypes.bool.isRequired,
  getCuisines: PropTypes.func.isRequired,
  getRestaurants: PropTypes.func.isRequired,
  clearRestaurants: PropTypes.func.isRequired,
  cityID: PropTypes.number.isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCuisines: PropTypes.string.isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
