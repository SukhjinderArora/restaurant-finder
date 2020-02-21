import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import FormContainer from './Forms/FormContainer';
import SearchForm from './Forms/SearchForm';
import InputError from './Forms/InputError';
import AutoComplete from './Forms/AutoComplete';

import {
  searchForRestaurants,
  clearSearchResults,
} from '../store/actions/searchActions';

const propTypes = {
  restaurantsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchRestaurants: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  userLocation: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country_id: PropTypes.number,
    country_name: PropTypes.string,
    country_flag_url: PropTypes.string,
  }).isRequired,
};

const Search = ({
  restaurantsList,
  searchRestaurants,
  clearResults,
  userLocation,
}) => {
  const [inputText, setInputText] = useState('');
  const [showAutoComplete, setAutoCompleteVisibility] = useState(false);
  const searchRestaurantsDebounced = useCallback(
    debounce(searchRestaurants, 200),
    []
  );

  const formSubmitHandler = e => {
    e.preventDefault();
  };

  const inputChangeHandler = e => {
    setInputText(e.target.value);
    if (e.target.value.length > 2 && userLocation.id) {
      searchRestaurantsDebounced(e.target.value, userLocation.id);
      setAutoCompleteVisibility(true);
    } else {
      setAutoCompleteVisibility(false);
      clearResults();
    }
  };

  const clearInput = e => {
    e.preventDefault();
    setInputText('');
    setAutoCompleteVisibility(false);
    clearResults();
  };

  const listItemClickHandler = name => {
    setInputText(name);
    setAutoCompleteVisibility(false);
  };

  return (
    <div>
      <FormContainer>
        <SearchForm
          input={inputText}
          onInputChangeHandler={inputChangeHandler}
          onFormSubmitHandler={formSubmitHandler}
          clearInput={clearInput}
        />
        {showAutoComplete && restaurantsList.length > 0 ? (
          <AutoComplete
            list={restaurantsList}
            type="restaurants"
            onListItemClick={listItemClickHandler}
          />
        ) : null}
        {!userLocation.id && inputText && (
          <InputError errorMessage="Please Select Your Location." />
        )}
      </FormContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurantsList: state.search.restaurantsData.restaurants || [],
    userLocation: state.location.userLocation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRestaurants: (query, cityID) =>
      dispatch(searchForRestaurants(query, cityID)),
    clearResults: () => dispatch(clearSearchResults()),
  };
};

Search.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
