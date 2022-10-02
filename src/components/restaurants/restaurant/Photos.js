import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';

const Photos = ({ photos, setModal }) => {
  return (
    <PhotosWrapper>
      <Header>Photos</Header>
      <Flex>
        {photos.map((photo) => (
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

const PhotosWrapper = styled.section`
  margin-top: 3rem;
  @media (max-width: 499px) {
    margin-top: 2rem;
    padding: 0 1rem;
  }
`;

const Header = styled.header`
  font-size: 3rem;
  font-weight: 400;
  @media (max-width: 499px) {
    font-size: 2.5rem;
  }
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

const Image = styled.img`
  @media (max-width: 499px) {
    width: 10rem;
  }
`;

Photos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  photos: PropTypes.arrayOf(object).isRequired,
  setModal: PropTypes.func.isRequired,
};
export default Photos;
