import Proptypes from 'prop-types';
import styled from 'styled-components';

const Backdrop = ({ showBackdrop, setBackdropVisible }) => {
  return (
    <StyledBackdrop
      onClick={() => setBackdropVisible(false)}
      showBackdrop={showBackdrop}
    />
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
  background-color: rgb(0, 0, 0);
  transition: opacity ease-in 0.3s, visibility ease-in 0.3s;
  opacity: ${(props) => (props.showBackdrop ? 0.3 : 0)};
  visibility: ${(props) => (props.showBackdrop ? 'visible' : 'hidden')};
`;

Backdrop.propTypes = {
  showBackdrop: Proptypes.bool.isRequired,
  setBackdropVisible: Proptypes.func.isRequired,
};

export default Backdrop;
