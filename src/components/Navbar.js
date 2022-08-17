import React from 'react';
import LogoTab from './LogoTab';


import SearchBar from './SearchBar';
import { StyledNavbar } from './styles/Navbar.styled';

const Navbar = ({searchChanged}) => {
  return (
    <StyledNavbar>
      <LogoTab />
      <SearchBar searchChanged={searchChanged} />
    </StyledNavbar>
  );
};

export default Navbar;
