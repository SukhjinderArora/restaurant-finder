import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 700;
  color: #5f5e5e;
  :hover {
    color: #fc8019;
  }
  @media (max-width: 499px) {
    font-size: 1.8rem;
  }
`;

export default Logo;
