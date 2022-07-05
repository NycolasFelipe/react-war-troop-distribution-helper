import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    background-color: #0a0a0a;
    overflow-y: hidden;
  }
`;

export default GlobalStyle;
