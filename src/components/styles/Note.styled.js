import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export const NoteItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  /* background: red; */
  line-height: 1.5;
  max-height: 25vh;
  padding: 1rem;
  border-bottom: 0.3px solid #eee;
  border-right: 0.3px solid #eee;
  overflow: hidden;
  text-overflow: ellipsis;

  :hover {
    background: #cae6e3;
    opacity: 0.9;
  }

  h1 {
    font-size: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    color: #bbb;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    min-width: 100%;
    border-bottom: 0.3px solid #bbb;
    height: 28vw;
    h1 {
      font-size: 1.2rem;
    }
  }
`;

export const NoteBody = styled.div`
  max-height: 60px;
  /* width: 100px; */

  * {
    /* font-size: 1.5rem; */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #bbb;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      * {
        font-size: 1rem;
      }
      height: 25px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    * {
      font-size: 1rem;
    }
    height: 25px;
  }
  /* padding-bottom: 30px; */
`;
export const NotesContainer = styled.div`
  height: 83.2vh;
  border-right: 1px solid #eee;
  width: 30vw;
  /* border-bottom: 1px solid #eee; */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    /* height: 50vw; */
  }
`;

export const DeleteIcon = styled(FaTrash)`
  color: #dbb;
  font-size: 15px;
  visibility: ${({ invisible }) => invisible && 'none'};
  :hover {
    color: red;
    transform: scale(1.1);
  }
`;

export const NoteTitle = styled.div`
  
`;
