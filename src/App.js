import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LocalDataProvider from './provider';
import StyledApp, { GlobalStylesProvider } from './styles/AppStyles';
import Project from './components/Project';
import Controls from './components/Controls';
import PageNotFound from './components/404';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/100_days_css';

const AppHOC = () => (
  <StyledApp>
    <Project />
    <Controls />
  </StyledApp>
);

const App = () => (
  <BrowserRouter basename={basename}>
    <LocalDataProvider>
      <GlobalStylesProvider />
      <Switch>
        <Route exact path="/" component={AppHOC} />
        {/* <Route path="/404" component={PageNotFound} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </LocalDataProvider>
  </BrowserRouter>
);

export default App;
