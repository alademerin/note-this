import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { StyledSearchBar } from './styles/SearchBar.styled';

const SearchBar = ({ searchChanged }) => {
  return (
    <StyledSearchBar>
      <BsSearch />
      <input placeholder='Search Note-THIS'  onChange={searchChanged} />
    </StyledSearchBar>
  );
};

export default SearchBar;
