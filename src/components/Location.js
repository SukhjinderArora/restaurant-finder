import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import LocationForm from './Forms/LocationForm';
import FormContainer from './Forms/FormContainer';
import AutoComplete from './Forms/AutoComplete';
import InputError from './Forms/InputError';

import * as location from '../store/actions/locationActions';

import backgroundImage from '../assets/images/svg/background.svg';

const propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  getListOfCities: PropTypes.func.isRequired,
  clearListOfCities: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const HeroImage = styled.div`
  background-image: url(${backgroundImage});
  height: 50rem;
  width: 100%;
  position: relative;
  background-position: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 40%;
`;

const Location = ({
  cities,
  getListOfCities,
  clearListOfCities,
  getUserLocation,
  history,
}) => {
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState(false);
  const [showAutoComplete, setAutoCompleteVisibility] = useState(false);
  const getListOfCitiesDebounced = useCallback(
    debounce(getListOfCities, 200),
    []
  );

  function handleChange(e) {
    setInputText(e.target.value);
    if (e.target.value.length > 2) {
      setAutoCompleteVisibility(true);
      getListOfCitiesDebounced(e.target.value);
    } else {
      clearListOfCities();
      setAutoCompleteVisibility(false);
    }
    if (inputError) setInputError(false);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    setInputError(true);
    setAutoCompleteVisibility(false);
  }

  function clearInput(e) {
    e.preventDefault();
    setInputText('');
    setAutoCompleteVisibility(false);
    clearListOfCities();
    if (inputError) setInputError(false);
  }

  function listItemClickHandler(id, name) {
    setInputText(name);
    setAutoCompleteVisibility(false);
    getUserLocation(id);
    history.push('/restaurants');
  }

  return (
    <HeroImage>
      <FormContainer>
        <LocationForm
          text={inputText}
          handleChange={handleChange}
          clearInput={clearInput}
          formSubmitHandler={formSubmitHandler}
        />
        {showAutoComplete && cities.length > 0 ? (
          <AutoComplete
            list={cities}
            type="cities"
            onListItemClick={listItemClickHandler}
          />
        ) : null}
        {inputError ? (
          <InputError errorMessage="Please Enter Your Location" />
        ) : null}
      </FormContainer>
    </HeroImage>
  );
};

const mapStateToProps = state => {
  return {
    cities: state.location.cities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListOfCities: cityName => dispatch(location.getListOfCities(cityName)),
    clearListOfCities: () => dispatch(location.clearCitiesList()),
    getUserLocation: id => dispatch(location.getUserLocation(id)),
  };
};

Location.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Location);
