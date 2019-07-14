import React from 'react';

import Project from './components/Project';
import Controls from './components/Controls';
import StyledApp, { GlobalStyles } from './styles/AppStyles';

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Project />
      <Controls />
    </StyledApp>
  );
};

export default App;
