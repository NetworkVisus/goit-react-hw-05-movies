import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 15px;
  width: calc((100% - 72px) / 5);
`;
export const StyledLink = styled(Link)`
  color: #585858;
`;
export const Div = styled.div``;
export const Image = styled.img``;
export const Title = styled.h3``;
export const Description = styled.p``;
