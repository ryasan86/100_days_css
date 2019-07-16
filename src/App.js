import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LocalDataProvider from './provider';
import StyledApp, { GlobalStylesProvider } from './styles/AppStyles';
import ProjectView from './views/ProjectView';
import ControlsView from './views/ControlsView';
import PageNotFound from './components/404';
import GithubLink from './components/GithubIcon';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/100_days_css';

const AppHOC = () => (
  <StyledApp>
    <GithubLink />
    <ProjectView />
    <ControlsView />
  </StyledApp>
);

const App = () => (
  <BrowserRouter basename={basename}>
    <LocalDataProvider>
      <GlobalStylesProvider />
      <Switch>
        <Route exact path="/" component={AppHOC} />
        <Route component={PageNotFound} />
      </Switch>
    </LocalDataProvider>
  </BrowserRouter>
);

export default App;
