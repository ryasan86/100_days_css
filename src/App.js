import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Project from './components/Project';
import Controls from './components/Controls';
import StyledApp, { GlobalStyles } from './styles/AppStyles';
import LocalDataProvider from './provider';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/100_days_css';

const App = () => (
  <BrowserRouter basename={basename}>
    <LocalDataProvider>
      <StyledApp>
        <GlobalStyles />
        <Project />
        <Controls />
      </StyledApp>
    </LocalDataProvider>
  </BrowserRouter>
);

export default App;
