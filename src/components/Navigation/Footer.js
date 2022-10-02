import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <CopyRightText>Designed and Developed by Sukhjinder Arora</CopyRightText>
      <AttributionText>Powered By Zomato</AttributionText>
    </StyledFooter>
  );
};

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
  background: rgb(247, 247, 247);
  border-top: 1px solid rgba(142, 142, 142, 0.4);
  @media (max-width: 499px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
`;

const CopyRightText = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.8);
`;

const AttributionText = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.8);
`;

export default Footer;
