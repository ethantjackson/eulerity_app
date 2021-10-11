import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 10vh;
  display: flex;
  padding: 0 3%;
`;

export const Logo = styled.h1`
  flex-grow: 1;
  margin-top: 3vh;
  float: left;
  font-size: 4vh;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-grow: 5;
  flex-direction: row-reverse;
`;

export const LinkItem = styled.li`
  width: calc(5rem + 12%);
  margin-top: 3vh;
  font-size: 2vh;
  cursor: pointer;
  color: grey;
  transition: 0.2s all;
  &:hover {
    color: black;
    transform: scale(1.2);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
