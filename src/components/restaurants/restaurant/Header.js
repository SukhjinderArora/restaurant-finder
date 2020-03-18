import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as placeholderImage from '../../../assets/images/placeholder_image.jpg';

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  cuisines: PropTypes.string.isRequired,
};

const Header = styled.header`
  display: flex;
`;

const ImageContainer = styled.div`
  display: inline-block;
`;

const Image = styled.img``;

const Wrapper = styled.div`
  margin-left: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
`;

const Ratings = styled.h2`
  display: inline-block;
  font-size: 2.5rem;
  color: #fff;
  background-color: ${props => (props.rating < 3 ? '#ff9f00' : '#388e3c')};
  padding: 1rem;
  margin: 1rem 0;
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
`;

const RedText = styled(Text)`
  color: #cb202d;
`;

const RestaurantHeader = ({
  imageUrl,
  title,
  rating,
  location,
  categories,
  cuisines,
}) => {
  return (
    <Header>
      <ImageContainer>
        <Image
          src={imageUrl || placeholderImage}
          alt="restaurant featured image"
        />
      </ImageContainer>
      <Wrapper>
        <div>
          <Title>{title}</Title>
          <Ratings rating={rating}>
            {rating}
            /5
          </Ratings>
        </div>
        <div>
          <Text>{categories}</Text>
          <RedText>{cuisines}</RedText>
          <Text>{location}</Text>
        </div>
      </Wrapper>
    </Header>
  );
};

RestaurantHeader.propTypes = propTypes;

export default RestaurantHeader;
