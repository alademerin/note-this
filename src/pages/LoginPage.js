import React from 'react';
import DivBlock from '../components/DivBlock';
import LoginForm from '../components/LoginForm';
import { RowContainer } from '../components/styles/RowContainer.styled';

const LoginPage = () => {


  return (
    <RowContainer>
      <DivBlock>
        <h1>Hello</h1>
      </DivBlock>
      <LoginForm />
    </RowContainer>
  );
};

export default LoginPage;
