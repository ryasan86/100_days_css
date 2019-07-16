import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import StyledControlsView from '../styles/ControlsViewStyles';
import Title from '../components/Title';
import Nav from '../components/Nav';

const ControlsView = () => {
  const [animateState, setAnimateState] = useState({
    opacity: 0,
    transform: 'translateY(100%)',
  });

  useEffect(setAnimateState, []);

  return (
    <StyledControlsView animateState={animateState}>
      <div className="content">
        <Title />
        <Nav />
        <p className="description">
          A a collection of 100 builds over the course of 100 days to strengthen
          CSS layout, transition, and animation skills.
        </p>
      </div>
    </StyledControlsView>
  );
};

ControlsView.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(ControlsView);
