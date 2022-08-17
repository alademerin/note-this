import styled from 'styled-components';

export const StyledSearchBar = styled.span`
  font-size: 16px;
  display: flex;
  background: white;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
  padding: 0 2rem;
  color: #bbb;
  border-bottom: 0.5px solid #ddd;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  input {
    border: none;
    outline: none;
    margin-left: 1rem;
    font-size: 1rem;
    width: 100%;
  }
`;
