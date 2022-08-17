import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 7rem;

  label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
`;

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  border: none;
  background: #f3f3f4;
  height: 3rem;
  width: 30rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  font-size: 1.5rem;
  transition: all 2s;
  &::active {
    background: green;
  }
`;


export const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  border: none;
  background: #f3f3f4;
  height: 3rem;
  width: 30rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem;
`;
export const FormButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: none;
  background: #ea4c89;
  transition: all 0.3s;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  /* font-weight: bold; */
  font-size: 1rem;
  :hover {
    transform: scale(0.95);
  }
`;
