import React from 'react';
import LogoTab from './LogoTab';

import SearchBar from './SearchBar';
import { StyledNavbar } from './styles/Navbar.styled';

const Navbar = ({ searchChanged, toggleDarkMode }) => {
  return (
    <StyledNavbar>
      <LogoTab />
      <SearchBar
        searchChanged={searchChanged}
        toggleDarkMode={toggleDarkMode}
      />
    </StyledNavbar>
  );
};

export default Navbar;
