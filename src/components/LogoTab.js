import React from 'react';
import { StyledLogoTab } from './styles/Logo.styled';
import { FaStickyNote } from 'react-icons/fa';
const LogoTab = () => {
  return (
    <StyledLogoTab>
      <FaStickyNote color='white' />
      <h3>NOTE-This</h3>
    </StyledLogoTab>
  );
};

export default LogoTab;
