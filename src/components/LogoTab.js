import React from 'react';
import { StyledLogoTab } from './styles/Logo.styled';
import { MdEditNote } from 'react-icons/md';
const LogoTab = () => {
  return (
    <StyledLogoTab>
      <MdEditNote color='white' size={45} />
      <h3>NOTE-This</h3>
    </StyledLogoTab>
  );
};

export default LogoTab;
