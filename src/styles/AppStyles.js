import styled, { createGlobalStyle } from 'styled-components';

const GlobalStylesProvider = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-family: 'Courier New', 'Courier', sans-serif;  
  }
`;

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStylesProvider };
export default StyledApp;
