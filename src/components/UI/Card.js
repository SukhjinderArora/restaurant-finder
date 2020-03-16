import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as placeholderImage from '../../assets/images/placeholder_image.jpg';
import ratingIcon from '../../assets/images/svg/star.svg';

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cost: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  viewRestaurantBtnHandler: PropTypes.func.isRequired,
};

const CardContainer = styled.div`
  border: 1px solid transparent;
  padding: 2rem;
  padding-bottom: 0;
  max-width: 26rem;
  cursor: pointer;
  &:hover {
    border-color: #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
  }
`;

const ImageContainer = styled.div`
  width: 22rem;
  overflow: hidden;
`;

const Image = styled.img`
  height: 15rem;
  width: 100%;
`;

const CardContent = styled.div`
  text-align: center;
  margin-top: 5px;
`;

const Text = styled.p`
  text-align: left;
  font-size: 1.6rem;
`;

const Name = styled(Text)`
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

const Cuisines = styled(Text)`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.8);
`;

const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 1.5rem;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
`;

const RatingIcon = styled.img`
  width: 15px;
  margin-right: 5px;
`;

const RatingText = styled.p`
  font-size: 1.6rem;
`;

const LocationText = styled(Text)`
  color: rgba(0, 0, 0, 0.9);
  margin-top: 1rem;
`;

const ViewButton = styled.button`
  opacity: 0;
  visibility: hidden;
  font-family: inherit;
  font-size: 1.6rem;
  background-color: #fff;
  color: #fb923b;
  border: none;
  border-top: 1px solid #e9e9eb;
  padding: 1.5rem 5rem;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    color: #fc8019;
  }
  ${CardContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const Card = ({
  imageUrl,
  name,
  cuisines,
  rating,
  cost,
  location,
  viewRestaurantBtnHandler,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageUrl || placeholderImage} alt="Restaurant Image" />
      </ImageContainer>
      <CardContent>
        <Name>{name}</Name>
        <Cuisines>
          {cuisines
            .split(', ')
            .slice(0, 3)
            .join(', ')}
        </Cuisines>
        <RatingsContainer>
          <Ratings>
            <RatingIcon src={ratingIcon} alt="Rating Icon" />
            <RatingText>{rating}</RatingText>
          </Ratings>
          <p>{`${cost} FOR TWO`}</p>
        </RatingsContainer>
        <LocationText>{location}</LocationText>
        <ViewButton onClick={viewRestaurantBtnHandler}>
          View Restaurant
        </ViewButton>
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = propTypes;

export default Card;
