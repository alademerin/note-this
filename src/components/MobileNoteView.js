import { createPortal } from 'react-dom';
import { Button } from './styles/Button';
import { EditorContainer } from './styles/Editor.styled';
import { Modal, ModalCloseIcon } from './styles/Modal.styled';
import { Details, HeaderContainer, Titles } from './styles/NoteView.styled';
import { DetailsRowContainer } from './styles/RowContainer.styled';
import TextEditor from './TextEditor';

const MobileNoteView = ({
  isOpened,
  btnSaveClicked,
  titleValue,
  titleChanged,
  dateValue,
  value,
  textEditorChanged,
  closeModalClicked,
}) => {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <Modal>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          // background: 'red',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ModalCloseIcon onClick={closeModalClicked} />
        <Button onClick={btnSaveClicked}>Save</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderContainer>
          <input
            placeholder='Click to add title'
            value={titleValue}
            onChange={titleChanged}
          />
          <DetailsRowContainer>
            <Titles>
              {/* <p> </p> */}
              <p>Last Updated:</p>
              {/* <p>Tags:</p> */}
            </Titles>
            <Details>
              {/* <p>Salma Alademerin</p> */}
              <p>{dateValue}</p>
              {/* <p>#this #that</p> */}
            </Details>
          </DetailsRowContainer>
        </HeaderContainer>
        <EditorContainer>
          <TextEditor value={value} textEditorChanged={textEditorChanged} />
        </EditorContainer>
      </div>
    </Modal>,
    document.getElementById('mobileNoteView')
  );
};

export default MobileNoteView;
