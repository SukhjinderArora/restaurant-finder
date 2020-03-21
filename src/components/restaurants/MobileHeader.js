import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as FilterIconSVG } from '../../assets/images/svg/filter.svg';

const propTypes = {
  setSideDrawerOpen: PropTypes.func.isRequired,
};

const HeaderWrapper = styled.div`
  @media (min-width: 499px) {
    display: none;
  }
`;

const Header = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  margin-left: 1.5rem;
  margin-top: 1rem;
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const SelectWrapper = styled.div``;

const SelectLabel = styled.label`
  font-size: 1.6rem;
  margin-right: 1rem;
`;

const Select = styled.select`
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.5rem;
  border: 1px solid #d4d4d4;
  cursor: pointer;
  background: transparent;
  min-width: 10rem;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: #3d4152;
`;

const FilterIcon = styled(FilterIconSVG)`
  fill: #fc8019;
  width: 2rem;
  height: 2rem;
  margin-left: 5px;
`;

const MobileHeader = ({ setSideDrawerOpen }) => {
  const [sortOption, setSortOption] = useState('rating');
  const history = useHistory();
  const { userLocation } = useSelector(state => state.location);

  const onSelectChangeHandler = e => {
    const sort = e.target.value;
    setSortOption(sort);
  };

  useEffect(() => {
    const orderBy = sortOption === 'cost' ? 'asc' : 'desc';
    history.push(`/restaurants?sortBy=${sortOption}&orderBy=${orderBy}`);
  }, [sortOption, history]);

  return (
    <HeaderWrapper>
      <FiltersWrapper>
        <SelectWrapper>
          <SelectLabel htmlFor="sort">Sort:</SelectLabel>
          <Select
            name="sort"
            id="sort"
            onChange={onSelectChangeHandler}
            value={sortOption}
          >
            <option value="rating">Rating</option>
            <option value="cost">Cost</option>
          </Select>
        </SelectWrapper>
        <Filter onClick={() => setSideDrawerOpen(true)}>
          <FilterText>Filters</FilterText>
          <FilterIcon />
        </Filter>
      </FiltersWrapper>
      <Header>
        {`Restaurants in ${userLocation.name}, ${userLocation.country_name}`}
      </Header>
    </HeaderWrapper>
  );
};

MobileHeader.propTypes = propTypes;
export default MobileHeader;
