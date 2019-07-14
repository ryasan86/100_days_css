import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    height: 100%;

    &.project-container {
      /* border-right */
    }

    &.controls-container {
      background: lightgray;
    }
  }
`;

export { GlobalStyles };
export default StyledApp;
