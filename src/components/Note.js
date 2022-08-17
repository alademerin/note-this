import React from 'react';
import { NoteItem } from './styles/Note.styled';
import { SpreadItems } from './styles/RowContainer.styled';
import { DeleteIcon, NoteBody, NoteTitle } from './styles/Note.styled';

const Note = ({
  id,
  date,
  btnDeleteClicked,
  title,
  body,
  noteClicked,
  toggleNoteView,
}) => {
  return (
    <NoteItem
      onClick={() => {
        noteClicked(id, title, body, date);
      }}>
      <SpreadItems>
        <p>{date}</p>
        <DeleteIcon onClick={() => btnDeleteClicked(id)} invisible />
      </SpreadItems>
      <NoteTitle>
        <h1>{title}</h1>
      </NoteTitle>
      <NoteBody>
        <h6 dangerouslySetInnerHTML={{ __html: body }}></h6>
      </NoteBody>
    </NoteItem>
  );
};

export default Note;
