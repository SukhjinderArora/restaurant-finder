import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const propTypes = {
  userLocated: PropTypes.bool.isRequired,
};

const Home = ({ userLocated }) => {
  return userLocated ? (
    <Redirect to="/restaurants" />
  ) : (
    <Redirect to="/location" />
  );
};

const mapStateToProps = state => {
  return {
    userLocated: !!state.location.userLocation.id,
  };
};

Home.propTypes = propTypes;

export default connect(mapStateToProps)(Home);
