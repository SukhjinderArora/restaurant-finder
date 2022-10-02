import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = ({ userLocated }) => {
  return userLocated ? (
    <Navigate to="/restaurants" />
  ) : (
    <Navigate to="/location" />
  );
};

const mapStateToProps = (state) => {
  return {
    userLocated: !!state.location.userLocation.id,
  };
};

Home.propTypes = { userLocated: PropTypes.bool.isRequired };

export default connect(mapStateToProps)(Home);
