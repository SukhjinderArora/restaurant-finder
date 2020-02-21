import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 5rem;
  background: rgba(228, 228, 228, 0.15);
  border-top: 1px solid rgba(212, 212, 212, 0.4);
`;

const CopyRightText = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.8);
`;

const AttributionText = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <CopyRightText>Designed and Developed by Sukhjinder Arora</CopyRightText>
      <AttributionText>Powered By Zomato</AttributionText>
    </StyledFooter>
  );
};

export default Footer;
