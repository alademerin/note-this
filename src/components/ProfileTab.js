import React from 'react';
import { StyledProfileTab } from './styles/Profile.styled';
import { FaRegBell } from 'react-icons/fa';
const ProfileTab = () => {
  return (
    <StyledProfileTab>
      <img
        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        alt=''
        height={'50px'}
        width={'50px'}
      />
      <p>Hello, </p>
      <h6>Salma</h6>
      <FaRegBell />
    </StyledProfileTab>
  );
};

export default ProfileTab;
