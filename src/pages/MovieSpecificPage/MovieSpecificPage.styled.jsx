import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBack = styled(Link)`
  color: #0f0f0f;
  font-weight: 700;
  background-color: #b3b3b3dc;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px;
  border-radius: 15px;
  display: inline-block;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #0f0f0f;
  }
`;

export const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 100px;
  justify-content: center;
  margin-top: 50px;
`;
export const ListItem = styled.li`
  margin-bottom: 20px;
`;
export const StyledNavlink = styled(NavLink)`
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
