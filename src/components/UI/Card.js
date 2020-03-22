import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as placeholderImage from '../../assets/images/placeholder_image.jpg';
import RatingIcon from './RatingIcon';

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
  @media (max-width: 499px) {
    display: flex;
    padding: 0;
    margin: 1rem 2rem;
    align-items: flex-start;
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 22rem;
  overflow: hidden;
  @media (max-width: 499px) {
    width: auto;
  }
`;

const Image = styled.img`
  height: 15rem;
  width: 100%;
  @media (max-width: 499px) {
    width: 5rem;
    height: auto;
  }
`;

const CardContent = styled.div`
  text-align: center;
  margin-top: 5px;
  @media (max-width: 499px) {
    margin-top: 0;
    margin-left: 1rem;
    flex-basis: 80%;
  }
`;

const Text = styled.p`
  text-align: left;
  font-size: 1.4rem;
`;

const Name = styled(Text)`
  font-size: 1.8rem;
  color: #212121;
  margin-bottom: 5px;
`;

const Cuisines = styled(Text)`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.8);
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 1.5rem;
  @media (max-width: 499px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5px;
  }
`;

const Cost = styled(Text)`
  color: rgba(0, 0, 0, 0.9);
  margin-top: 5px;
`;

const LocationText = styled(Text)`
  color: rgba(0, 0, 0, 0.9);
  margin-top: 1rem;
  @media (max-width: 499px) {
    display: none;
  }
`;

const ViewButton = styled.button`
  opacity: 0;
  visibility: hidden;
  font-family: inherit;
  font-size: 1.4rem;
  text-transform: uppercase;
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
  @media (max-width: 499px) {
    display: none;
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
    <CardContainer onClick={viewRestaurantBtnHandler}>
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
        <FlexContainer>
          <RatingIcon rating={rating} />
          <Cost>{`${cost} FOR TWO`}</Cost>
        </FlexContainer>
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
