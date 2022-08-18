import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({ value, textEditorChanged, editorBackground }) => {
  const apikey = process.env.REACT_APP_TINY_EDITOR_KEY;
  return (
    <>
      <Editor
        apiKey={apikey}
        init={{
          height: 400,
          width: 650,
          menubar: true,
          placeholder: 'Enter your text here',
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'media',
            'table',
            'code',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background:${editorBackground}`,
        }}
        value={value}
        onEditorChange={textEditorChanged}
      />
    </>
  );
};

export default TextEditor;
