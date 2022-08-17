import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #ea4c89;
  transition: all 0.3s;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 15px;
  margin-bottom: 1rem;

  font-weight: bold;
  font-size: 1rem;
  :hover {
    transform: scale(0.95);
  }

  align-self: flex-end;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    
  }
`;
