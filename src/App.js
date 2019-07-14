import React from 'react';

import Project from './components/Project';
import Controls from './components/Controls';
import StyledApp, { GlobalStyles } from './styles/AppStyles';

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <div className="container project-container">
        <Project />
      </div>
      <div className="container controls-container">
        <Controls />
      </div>
    </StyledApp>
  );
};

export default App;
