import styled from 'styled-components';

export const Div = styled.div``;
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
  background-color: #272727;
  border-radius: 20px;
  padding: 15px;
  width: calc((100% - 72px) / 5);
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 200;
  border-radius: 30px;
`;
export const Subtitle = styled.h2`
  color: #c5c5c5;
`;
export const Description = styled.p`
  color: #fff;
`;
