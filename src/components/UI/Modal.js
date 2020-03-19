import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Backdrop from './Backdrop';

const propTypes = {
  showModal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 90%;
  width: 80%;
  background: #fff;
  transform: translate(-50%, -50%);
  z-index: 300;
  opacity: ${props => (props.showModal ? 1 : 0)};
  visibility: ${props => (props.showModal ? 'visible' : 'hidden')};
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  height: 24px;
  width: 24px;
  right: -40px;
  top: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 32px;
  line-height: 1;
  vertical-align: top;
  &:hover {
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);
  }
`;

const Modal = ({ showModal, setModal, children }) => {
  return (
    <>
      <Backdrop showBackdrop={showModal} setBackdropVisible={setModal} />
      <ModalWrapper showModal={showModal}>
        <ModalCloseBtn onClick={() => setModal(false)}>✕</ModalCloseBtn>
        {children}
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = propTypes;
export default Modal;
