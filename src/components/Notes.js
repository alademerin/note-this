import React from 'react';
import Note from './Note';
import { NotesContainer } from './styles/Note.styled';
import { timeFormat } from 'd3-time-format';
// import parse from 'html-react-parser';

const Notes = ({ notes, handleDeleteNote, noteClicked }) => {
  const formatTime = timeFormat('%B %d, %Y');
  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          date={formatTime(note.date.toDate())}
          body={note.body}
          btnDeleteClicked={handleDeleteNote}
          noteClicked={noteClicked}
        />
      ))}
    </NotesContainer>
  );
};

export default Notes;
