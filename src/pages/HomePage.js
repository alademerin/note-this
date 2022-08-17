import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import NewNoteTab from '../components/NewNoteTab';
import Notes from '../components/Notes';
import NoteView from '../components/NoteView';
import { Container } from '../components/styles/Container';
import { StyledDivBlockThin } from '../components/styles/DivBlock.styled';
import { RowContainer } from '../components/styles/RowContainer.styled';
import { db } from '../firebase-config';
import {
  collection,
  deleteDoc,
  onSnapshot,
  addDoc,
  doc,
  setDoc,
  orderBy,
  query,
} from 'firebase/firestore';
// import parse from 'html-react-parser';
import { timeFormat } from 'd3-time-format';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import Note from '../components/Note';
import MobileNoteView from '../components/MobileNoteView';

const HomePage = ({ id }) => {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [exists, setExists] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNoteViewOpened, setIsMobileNoteViewOpened] = useState(false);
  console.log(isMobileNoteViewOpened);
  const { dispatch } = useContext(AuthContext);

  // const notesCollectionRef = collection(db, 'notes');

  const search = (data) => {
    const formatTime = timeFormat('%B %d, %Y');
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.body.toLowerCase().includes(searchTerm) ||
        formatTime(item.date.toDate()).toLowerCase().includes(searchTerm)
    );
  };

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'notes'), orderBy('date', 'desc')),
      (snapShot) => {
        let noteList = [];
        snapShot.docs.forEach((doc) => {
          noteList.push({ ...doc.data(), id: doc.id });
        });
        setIsLoading(false);
        setNotes(noteList);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const reset = () => {
    setTitle('');
    setValue('');
    setDateValue('');
    setExists(false);
  };

  const newNoteClicked = () => {
    reset();
    setIsMobileNoteViewOpened(true);
  };

  const createNote = async () => {
    const formatTime = timeFormat('%B %d, %Y');
    try {
      setExists(true);
      const newNote = await addDoc(collection(db, 'notes'), {
        title: title || 'New Note',
        date: new Date(),
        body: value,
      }).then(toast.success('Note Created'));
      setSelectedNoteId(newNote.id);
      setDateValue(formatTime(new Date()));
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async () => {
    const formatTime = timeFormat('%B %d, %Y');

    const id = selectedNoteId;
    await setDoc(doc(db, 'notes', id), {
      title: title || 'New Note',
      date: new Date(),
      body: value,
    }).then(toast.success('Changes saved'));
    setDateValue(formatTime(new Date()));
  };

  const textEditorChanged = (newValue, editor) => setValue(newValue);

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id)).then(
      toast.error('note has been deleted')
    );
    reset();
  };

  const noteClicked = (id, title, body, date) => {
    setExists(true);
    setValue(body);
    setTitle(title);
    setDateValue(date);
    setSelectedNoteId(id);
    setIsMobileNoteViewOpened(true);
  };

  // const logout = () => {
  //   dispatch({ type: 'LOGOUT' });
  // };

  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },

    mobile: '768px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar
          searchChanged={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <RowContainer>
          <StyledDivBlockThin></StyledDivBlockThin>
          <div>
            <NewNoteTab newNoteClicked={newNoteClicked} />
            {isLoading ? (
              <Note title='Loading Notes...' />
            ) : (
              <Notes
                notes={search(notes)}
                handleDeleteNote={deleteNote}
                noteClicked={noteClicked}
              />
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NoteView
              dateValue={dateValue}
              value={value}
              titleValue={title}
              titleChanged={(e) => setTitle(e.target.value)}
              textEditorChanged={textEditorChanged}
              btnSaveClicked={exists ? updateNote : createNote}
            />
            <ToastContainer
              autoClose={1000}
              toastStyle={{ fontSize: '16px', color: 'black' }}
            />
          </div>
        </RowContainer>
        <MobileNoteView
          dateValue={dateValue}
          value={value}
          titleValue={title}
          titleChanged={(e) => setTitle(e.target.value)}
          textEditorChanged={textEditorChanged}
          btnSaveClicked={exists ? updateNote : createNote}
          isOpened={isMobileNoteViewOpened}
          closeModalClicked={() => setIsMobileNoteViewOpened(false)}
        />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
