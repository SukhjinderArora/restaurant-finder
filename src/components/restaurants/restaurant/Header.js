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
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  @media (max-width: 499px) {
    display: block;
    text-align: center;
  }
`;

const Image = styled.img`
  @media (max-width: 499px) {
    width: 15rem;
  }
`;

const Wrapper = styled.div`
  margin-left: 2rem;
`;

const TitleWrapper = styled.div`
  @media (max-width: 499px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  @media (max-width: 499px) {
    font-size: 2.5rem;
    color: #1f1f1f;
  }
`;

const Ratings = styled.h2`
  display: inline-block;
  font-size: 2.5rem;
  color: #fff;
  background-color: ${props => (props.rating < 3 ? '#ff9f00' : '#388e3c')};
  padding: 1rem;
  margin: 1rem 0;
  @media (max-width: 499px) {
    font-size: 1.8rem;
    padding: 0.5rem;
    margin-right: 2rem;
  }
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
        <TitleWrapper>
          <Title>{title}</Title>
          <Ratings rating={rating}>
            {rating}
            /5
          </Ratings>
        </TitleWrapper>
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
