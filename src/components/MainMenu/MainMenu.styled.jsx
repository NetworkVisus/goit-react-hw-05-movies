import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
`;
export const ListItem = styled.li`
  margin-bottom: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  color: #0f0f0f;
  font-weight: 700;
  background-color: #b3b3b3dc;
  padding: 20px;
  border-radius: 15px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    color: #fff;
    background-color: #0f0f0f;
  }
`;
