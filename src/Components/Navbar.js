import React from 'react';
import { NavbarContainer, Logo, Links, LinkItem } from './Navbar.style';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <Link to='/'>PetPix</Link>
      </Logo>
      <Links>
        <LinkItem>
          <Link to='/about'>About</Link>
        </LinkItem>
        <LinkItem>
          <Link to='/'>Home</Link>
        </LinkItem>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
