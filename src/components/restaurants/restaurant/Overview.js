import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CheckMarkIcon } from '../../../assets/images/svg/checkmark.svg';

const propTypes = {
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  timings: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  averageCost: PropTypes.string.isRequired,
};

const Wrapper = styled.section`
  margin-top: 3rem;
`;

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 400;
`;

const RestaurantInfo = styled.div`
  margin-top: 1rem;
`;

const InfoText = styled.span`
  font-size: 1.6rem;
  line-height: 1.8;
`;

const InfoTextBold = styled(InfoText)`
  font-weight: 700;
`;

const List = styled.ul`
  list-style: none;
  font-size: 1.6rem;
  line-height: 1.8;
`;

const CheckMark = styled(CheckMarkIcon)`
  width: 1rem;
  margin-right: 1rem;
  & polygon {
    fill: green !important;
  }
`;

const Overview = ({
  address,
  phoneNumber,
  timings,
  highlights,
  averageCost,
}) => {
  return (
    <Wrapper>
      <Header>Overview</Header>
      <RestaurantInfo>
        <p>
          <InfoTextBold>Timings: </InfoTextBold>
          <InfoText>{timings}</InfoText>
        </p>
        <p>
          <InfoTextBold>Average Cost for two: </InfoTextBold>
          <InfoText>
            {averageCost}
            <span> (approx.)</span>
          </InfoText>
        </p>
        <p>
          <InfoTextBold>Phone Number: </InfoTextBold>
          <InfoText>{phoneNumber}</InfoText>
        </p>
        <p>
          <InfoTextBold>Address: </InfoTextBold>
          <InfoText>{address}</InfoText>
        </p>
        <div>
          <InfoTextBold>More info: </InfoTextBold>
          <List>
            {highlights.map(item => (
              <li key={item}>
                <CheckMark />
                <span>{item}</span>
              </li>
            ))}
          </List>
        </div>
      </RestaurantInfo>
    </Wrapper>
  );
};

Overview.propTypes = propTypes;

export default Overview;
