import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Spinner from './UI/Spinner';

const propTypes = {
  userLocated: PropTypes.bool.isRequired,
  locationLoading: PropTypes.bool.isRequired,
  locationError: PropTypes.bool.isRequired,
};

const Restaurants = ({ userLocated, locationLoading, locationError }) => {
  if (locationLoading) return <Spinner />;
  if (locationError) return <div>Error getting location</div>;
  if (!userLocated) return <Redirect to="/location" />;
  return <div>Restaurants in your area.</div>;
};

const mapStateToProps = state => {
  return {
    locationLoading: state.location.locationLoading,
    locationError: state.location.locationError,
    userLocated: !!state.location.userLocation.id,
  };
};

Restaurants.propTypes = propTypes;

export default connect(mapStateToProps)(Restaurants);
