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
};

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  max-width: 24.2rem;
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
  margin-top: 1rem;
`;

const Name = styled.p`
  font-size: 1.8rem;
  margin-bottom: 7px;
`;

const Cuisines = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.8);
`;

const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 2rem;
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

const Card = ({ imageUrl, name, cuisines, rating, cost }) => {
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
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = propTypes;

export default Card;
