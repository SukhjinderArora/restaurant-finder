import React from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  photos: PropTypes.arrayOf(object).isRequired,
  setModal: PropTypes.func.isRequired,
};

const PhotosWrapper = styled.section`
  margin-top: 3rem;
`;

const Header = styled.header`
  font-size: 3rem;
  font-weight: 400;
`;

const Flex = styled.div`
  display: flex;
  margin-top: 2em;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 1rem;
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

const FlexItem = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const Image = styled.img``;

const Photos = ({ photos, setModal }) => {
  return (
    <PhotosWrapper>
      <Header>Photos</Header>
      <Flex>
        {photos.map(photo => (
          <FlexItem
            key={photo.photo.id}
            onClick={() => setModal(true, photo.photo.url)}
          >
            <Image src={photo.photo.thumb_url} />
          </FlexItem>
        ))}
      </Flex>
    </PhotosWrapper>
  );
};

Photos.propTypes = propTypes;
export default Photos;
