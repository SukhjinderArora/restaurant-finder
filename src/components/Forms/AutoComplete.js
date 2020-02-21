import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  onListItemClick: PropTypes.func.isRequired,
};

const List = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  background-color: #fff;
  color: #000;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  padding-bottom: 1rem;
  margin-top: 5px;
  position: absolute;
  left: 0;
  right: 0;
  overflow-y: scroll;
  max-height: 30rem;
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
`;

const ListItem = styled.li`
  padding: 1.5rem 1rem;
  border-bottom: 1px dotted;
  border-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  &:hover {
    color: #fc8019;
  }
`;

const ListItemText = styled.p`
  font-size: 1.6rem;
`;

const ListItemSubText = styled.p`
  font-size: 1.4rem;
  color: #2f2f2f;
`;

const AutoComplete = ({ list, type, onListItemClick }) => {
  let listItems;
  if (type === 'cities') {
    listItems = list.map(listItem => (
      <ListItem
        key={listItem.id}
        onClick={() => onListItemClick(listItem.id, listItem.name)}
      >
        {listItem.name}
      </ListItem>
    ));
  } else if (type === 'restaurants') {
    listItems = list.map(listItem => (
      <ListItem
        key={listItem.restaurant.id}
        onClick={() => onListItemClick(listItem.restaurant.name)}
      >
        <ListItemText>{listItem.restaurant.name}</ListItemText>
        <ListItemSubText>
          {listItem.restaurant.location.locality_verbose}
        </ListItemSubText>
      </ListItem>
    ));
  }
  return <List>{listItems}</List>;
};

AutoComplete.propTypes = propTypes;

export default AutoComplete;
