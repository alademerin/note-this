import {
  Titles,
  Details,
  HeaderContainer,
  NoteViewContainer,
} from './styles/NoteView.styled';
import { DetailsRowContainer } from './styles/RowContainer.styled';
import TextEditor from './TextEditor';
import { Button } from './styles/Button';
import { EditorContainer } from './styles/Editor.styled';

const NoteView = ({
  value,
  textEditorChanged,
  btnSaveClicked,
  titleChanged,
  titleValue,
  dateValue,
}) => {
  return (
    <NoteViewContainer>
      <Button onClick={btnSaveClicked}>Save</Button>
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
    </NoteViewContainer>
  );
};

export default NoteView;
