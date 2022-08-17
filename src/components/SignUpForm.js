import { useState } from 'react';

import { Link } from 'react-router-dom';
import {
  Form,
  FormButton,
  PasswordInput,
  TextInput,
} from './styles/Form.styled';

import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, 'users', res.user.uid), {
      username,
      email,
      created: serverTimestamp(),
    });
    
  };

  return (
    <>
      <Form>
        <h1>Sign up to continue </h1>
        <label>Username:</label>

        <TextInput
          placeholder='username'
          type='username'
          name='firstName'
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <TextInput
          placeholder='email'
          type='email'
          name='firstName'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <PasswordInput
          placeholder='password'
          type='password'
          name='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormButton value='Sign Up' onClick={signUp}>
          Sign Up
        </FormButton>
        <Link to='/login'>
          <p>Already have an account? Login instead</p>
        </Link>
      </Form>
    </>
  );
};

export default SignUpForm;
