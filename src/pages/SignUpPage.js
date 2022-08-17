// import React,{useState} from 'react';
import DivBlock from '../components/DivBlock';
import SignUpForm from '../components/SignUpForm';
import { RowContainer } from '../components/styles/RowContainer.styled';
const SignUpPage = () => {
  
  return (
    <RowContainer>
      <DivBlock>
        <h1>signup</h1>
      </DivBlock>
      <SignUpForm />
    </RowContainer>
  );
};

export default SignUpPage;
