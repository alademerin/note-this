import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import {
  Form,
  FormButton,
  PasswordInput,
  TextInput,
} from './styles/Form.styled';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: 'LOGIN', payload: user });
      navigate('/');
      console.log(user.user.email);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Form>
        <h1>Sign in to continue </h1>
        <label>Username:</label>
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
        <FormButton value='Sign In' onClick={login}>
          Login
        </FormButton>
        <Link to='/signup'>
          <p>sign up instead</p>
        </Link>
      </Form>
    </>
  );
};

export default LoginForm;
