import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserInfo = ({ userName, reviewTime }) => {
  return (
    <UserInfoWrapper>
      <UserName>{userName}</UserName>
      <ReviewTime>{reviewTime}</ReviewTime>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #525252;
`;

const UserName = styled(Text)`
  font-weight: 700;
`;

const ReviewTime = styled(Text)`
  margin-left: 1rem;
`;

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  reviewTime: PropTypes.string.isRequired,
};
export default UserInfo;
