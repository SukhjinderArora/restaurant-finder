/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import Card from '../UI/Card';

const RestaurantList = ({ restaurants, viewButtonHandler }) => {
  return restaurants.map(restaurant => (
    <Card
      name={restaurant.restaurant.name}
      key={restaurant.restaurant.id}
      imageUrl={restaurant.restaurant.thumb}
      cuisines={restaurant.restaurant.cuisines}
      rating={Number(restaurant.restaurant.user_rating.aggregate_rating)}
      cost={`${restaurant.restaurant.currency}${restaurant.restaurant.average_cost_for_two}`}
      location={`${restaurant.restaurant.location.locality}, ${restaurant.restaurant.location.city}`}
      viewRestaurantBtnHandler={e =>
        viewButtonHandler(
          restaurant.restaurant.id,
          restaurant.restaurant.name,
          e
        )
      }
    />
  ));
};

export default RestaurantList;
