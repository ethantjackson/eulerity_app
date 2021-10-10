import React from 'react';
import { NavbarContainer, Logo, Links, LinkItem } from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>PetPix</Logo>
      <Links>
        <LinkItem>About Me</LinkItem>
        <LinkItem>Contact Me</LinkItem>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
