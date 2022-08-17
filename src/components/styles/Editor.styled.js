import styled from 'styled-components';

export const EditorContainer = styled.div`
  display: flex;
  width: 55vw;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 15px;
    width: 100vw;
    display: flex;
    /* align-items: center; */
    /* background: orange; */
  }
`;
