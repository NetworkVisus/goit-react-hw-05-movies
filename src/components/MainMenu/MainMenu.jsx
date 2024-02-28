import * as Styled from './MainMenu.styled';

const MainMenu = () => {
  return (
    <Styled.List>
      <Styled.ListItem>
        <Styled.StyledNavLink to="/">Home</Styled.StyledNavLink>
      </Styled.ListItem>
      <Styled.ListItem>
        <Styled.StyledNavLink to="movies">Movies</Styled.StyledNavLink>
      </Styled.ListItem>
    </Styled.List>
  );
};

export default MainMenu;
