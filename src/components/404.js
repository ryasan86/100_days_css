import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import StyledPageNotFound from '../styles/404Styles';

const PageNotFound = ({ history: { goBack } }) => (
  <StyledPageNotFound>
    <h2>
      Uh oh! Page not found <span>☹</span>️
    </h2>
    <button onClick={goBack}>go back</button>
  </StyledPageNotFound>
);

PageNotFound.propTypes = {
  goBack: PropTypes.func,
};

export default withRouter(PageNotFound);
