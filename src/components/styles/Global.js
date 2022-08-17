import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html{
    font-size:16px;
}
    *{
        box-sizing: border-box;
        margin:0;
        padding: 0;
    }

    body{

        font-size: 28px;
        margin: 0;
        
}

h1{
    font-size: 2rem;
    

}
p{
    margin:0;
    font-size:16px;
    font-weight: bold;
}
`;

export default GlobalStyles;
