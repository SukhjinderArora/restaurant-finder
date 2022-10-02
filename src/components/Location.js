import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import LocationForm from './Forms/LocationForm';
import FormContainer from './Forms/FormContainer';
import AutoComplete from './Forms/AutoComplete';
import InputError from './Forms/InputError';

import * as location from '../store/actions/locationActions';
import { clearSelectedCuisines } from '../store/actions/filtersAction';

import backgroundImage from '../assets/images/svg/background.svg';

const Location = ({
  cities,
  getListOfCities,
  clearListOfCities,
  getUserLocation,
}) => {
  const [inputText, setInputText] = useState('');
  const [inputError, setInputError] = useState(false);
  const [showAutoComplete, setAutoCompleteVisibility] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getListOfCitiesDebounced = useCallback(
    debounce(getListOfCities, 200),
    []
  );

  useEffect(() => {
    if (inputText.length > 2) {
      setAutoCompleteVisibility(true);
      getListOfCitiesDebounced(inputText);
    } else {
      clearListOfCities();
      setAutoCompleteVisibility(false);
    }
  }, [inputText, getListOfCitiesDebounced, clearListOfCities]);

  const handleChange = useCallback(
    (e) => {
      setInputText(e.target.value);
      if (inputError) setInputError(false);
    },
    [inputError]
  );

  const formSubmitHandler = useCallback((e) => {
    e.preventDefault();
    setInputError(true);
    setAutoCompleteVisibility(false);
  }, []);

  const clearInput = useCallback(
    (e) => {
      e.preventDefault();
      setInputText('');
      setAutoCompleteVisibility(false);
      clearListOfCities();
      if (inputError) setInputError(false);
    },
    [clearListOfCities, inputError]
  );

  const listItemClickHandler = useCallback(
    (id, name) => {
      setInputText(name);
      setAutoCompleteVisibility(false);
      getUserLocation(id);
      dispatch(clearSelectedCuisines());
      navigate('/restaurants');
    },
    [dispatch, navigate, getUserLocation]
  );

  const listItemKeyPressHandler = useCallback(
    (id, name, e) => {
      if (e.keyCode === 13) {
        setInputText(name);
        setAutoCompleteVisibility(false);
        getUserLocation(id);
        dispatch(clearSelectedCuisines());
        navigate('/restaurants');
      }
    },
    [dispatch, navigate, getUserLocation]
  );

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
            onListItemKeyDown={listItemKeyPressHandler}
          />
        ) : null}
        {inputError ? (
          <InputError errorMessage="Please Enter Your Location" />
        ) : null}
      </FormContainer>
    </HeroImage>
  );
};

const HeroImage = styled.div`
  background-image: url(${backgroundImage});
  height: 75vh;
  width: 100%;
  position: relative;
  background-position: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 40%;
`;

const mapStateToProps = (state) => {
  return {
    cities: state.location.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListOfCities: (cityName) => dispatch(location.getListOfCities(cityName)),
    clearListOfCities: () => dispatch(location.clearCitiesList()),
    getUserLocation: (id) => dispatch(location.getUserLocation(id)),
  };
};

Location.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  getListOfCities: PropTypes.func.isRequired,
  clearListOfCities: PropTypes.func.isRequired,
  getUserLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
