import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SpinnerRect from '../../UI/SpinnerRect';

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

const PhotoWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  position: relative;
  @media (max-width: 499px) {
    display: flex;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: ${props => (props.imageLoaded ? 'block' : 'none')};
  @media (max-width: 499px) {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const Photo = ({ imageUrl }) => {
  const [imageLoaded, setImageLoadState] = useState(false);
  const onImageLoad = () => {
    setImageLoadState(true);
  };
  return (
    <PhotoWrapper>
      <Image src={imageUrl} onLoad={onImageLoad} imageLoaded={imageLoaded} />
      {!imageLoaded && <SpinnerRect />}
    </PhotoWrapper>
  );
};

Photo.propTypes = propTypes;
export default Photo;
