import styled, { createGlobalStyle } from 'styled-components';

const GlobalStylesProvider = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    @media (max-width: 425px) {
      font-size: 8px;
    }
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
  @media (max-width: 1000px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

export { GlobalStylesProvider };
export default StyledApp;
