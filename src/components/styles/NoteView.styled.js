import styled from 'styled-components';

export const NoteViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: red; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export const Titles = styled.div`
  line-height: 2;
  p {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.text};
  }
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
  } */
`;
export const Details = styled.span`
  margin-left: 1rem;
  height: 5vh;
  line-height: 2;
  width: 40vw;
  h6 {
    font-size: 1rem;
  }
  p {
    color: #bbb;
    margin: 10px 0;
  }
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 8px 10px;
    line-height: 1;
    width: 50%;
  } */
`;

export const HeaderContainer = styled.div`
  padding: 0.5rem 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  input {
    font-size: 2rem;
    border: none;
    outline: none;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 20px;
      font-weight: bold;
    }
  }
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
  } */
  /* margin-top:2rem */
`;
