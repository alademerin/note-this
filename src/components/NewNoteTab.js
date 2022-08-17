import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddNoteContainer } from './styles/NewNote.styled';
const NewNoteTab = ({ newNoteClicked}) => {
  return (
    <AddNoteContainer>
      <p>Last Updated</p>
      <button onClick={newNoteClicked}>
        <AiOutlinePlus />
        NEW NOTE
      </button>
    </AddNoteContainer>
  );
};

export default NewNoteTab;
