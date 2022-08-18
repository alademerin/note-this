import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { StyledSearchBar } from './styles/SearchBar.styled';
import Toggle from './Toggle';

const SearchBar = ({ searchChanged, toggleDarkMode }) => {
  return (
    <StyledSearchBar>
      <BsSearch />
      <input placeholder='Search Note-THIS' onChange={searchChanged} />
      <Toggle rounded onToggle={toggleDarkMode} />
    </StyledSearchBar>
  );
};

export default SearchBar;
