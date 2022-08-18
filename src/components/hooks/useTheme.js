import { useState, useEffect } from 'react';

const darkTheme = {
  colors: {
    body: 'hsl(218, 23%, 16%)',
    background: '#000',
    text: '#fff',
  },

  mobile: '800px',
};

const lightTheme = {
  colors: {
    body: '#fff',
    background: '#FFF',
    text: '#000',
  },
  mobile: '800px',
};

const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isToggled, setIsToggled] = useState(false);
  const [editorColor, setEditorColor] = useState('');

  useEffect(() => {
    !isToggled ? setTheme(lightTheme) : setTheme(darkTheme);
  }, [isToggled, editorColor]);

  const retoggle = () => {
    setIsToggled(!isToggled);
    setEditorColor('black');
  };

  return { theme, editorColor, retoggle };
};

export default useTheme;
