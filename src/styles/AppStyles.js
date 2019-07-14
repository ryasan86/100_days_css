import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Courier New', 'Courier', sans-serif;  
  }
`;

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyles };
export default StyledApp;
