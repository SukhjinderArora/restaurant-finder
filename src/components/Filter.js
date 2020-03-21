import React, { useState, useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import * as filtersAction from '../store/actions/filtersAction';

import { ReactComponent as CloseIconSVG } from '../assets/images/svg/close.svg';

import CustomCheckBox from './UI/CustomCheckBox';

const propTypes = {
  cuisines: PropTypes.arrayOf(object).isRequired,
  setSideDrawerOpen: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const CloseIcon = styled(CloseIconSVG)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  &:hover polygon {
    fill: #fc8019;
  }
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
  color: rgba(0, 0, 0, 0.9);
`;

const FilterContainer = styled.div`
  margin: 1rem;
`;

const FilterType = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
`;

const FilterList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-height: 35rem;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fc8019;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
  @media (max-width: 499px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 30rem;
  }
`;

const FilterItem = styled.li`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.75);
  max-width: 50%;
  width: 100%;
  margin: 5px 0;
  @media (max-width: 499px) {
    max-width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  font-family: inherit;
  font-weight: 700;
  border: 1px solid transparent;
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  cursor: pointer;
  @media (max-width: 499px) {
    padding: 1.5rem 0;
  }
`;

const ClearButton = styled(Button)`
  color: #535665;
  border: 1px solid #535665;
  background: #fff;
  &:hover {
    background: #535665;
    color: #fff;
    border: 1px solid #535665;
  }
  @media (max-width: 499px) {
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled(Button)`
  background: #fc8019;
  color: #fff;
  border: 1px solid transparent;
  &:hover {
    background: #fff;
    color: #fc8019;
    border: 1px solid #fc8019;
  }
`;

const Filter = ({ cuisines, setSideDrawerOpen }) => {
  const [selectedCuisines, setSelectedCuisines] = useState({});
  const dispatch = useDispatch();
  const selectedCuisinesStr = useSelector(
    state => state.filter.selectedCuisines
  );

  useEffect(() => {
    const selectedCuisinesArray = selectedCuisinesStr.split(',');
    const selectedCuisinesObj = {};
    selectedCuisinesArray.forEach(cuisineId => {
      selectedCuisinesObj[cuisineId] = cuisineId;
    });
    setSelectedCuisines(selectedCuisinesObj);
  }, [selectedCuisinesStr]);

  const onCheckBoxChangeHandler = (id, value, e) => {
    if (e.target.checked) {
      const newState = {
        ...selectedCuisines,
        [id]: value,
      };
      setSelectedCuisines(newState);
    } else {
      const newState = { ...selectedCuisines };
      delete newState[id];
      setSelectedCuisines(newState);
    }
  };

  const clearButtonHandler = e => {
    e.preventDefault();
    setSelectedCuisines({});
  };

  const submitButtonHandler = e => {
    e.preventDefault();
    const cuisineString = Object.keys(selectedCuisines).reduce(
      (acc, cur) => `${acc},${cur}`,
      ''
    );
    dispatch(filtersAction.setCuisines(cuisineString));
    setSideDrawerOpen(false);
  };

  const filterList = cuisines.map(cuisine => (
    <FilterItem key={cuisine.cuisine.cuisine_id}>
      <CustomCheckBox
        id={cuisine.cuisine.cuisine_id}
        key={cuisine.cuisine.cuisine_id}
        name="cuisine"
        value={cuisine.cuisine.cuisine_name}
        selected={!!selectedCuisines[cuisine.cuisine.cuisine_id]}
        checkBoxChangeHandler={onCheckBoxChangeHandler}
      />
    </FilterItem>
  ));
  return (
    <Wrapper>
      <Header>
        <CloseButton onClick={() => setSideDrawerOpen(false)}>
          <CloseIcon />
        </CloseButton>
        <HeaderText>Filters</HeaderText>
      </Header>
      <FilterContainer>
        <FilterType>Cuisines</FilterType>
        <FilterList>{filterList}</FilterList>
        <ButtonsContainer>
          <ClearButton onClick={clearButtonHandler}>Clear</ClearButton>
          <SubmitButton onClick={submitButtonHandler}>
            Show Restaurants
          </SubmitButton>
        </ButtonsContainer>
      </FilterContainer>
    </Wrapper>
  );
};

Filter.propTypes = propTypes;

export default Filter;
