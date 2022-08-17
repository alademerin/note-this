import styled from 'styled-components';

export const AddNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: red; */
  padding: 15px 10px;
  align-items: center;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  button {
    padding: 7px 10px;
    border-radius: 1rem;
    color: #fff;
    border: none;
    background: #ea4c89;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      transform: scale(0.9);
    }
  }
`;
