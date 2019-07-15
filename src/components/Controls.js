import React, { useState, useReducer, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { projects, LocalDataContext } from '../provider';
import StyledControls, { NavStyles } from '../styles/ControlsStyles';
import Title from './Title';

const initialState = { left: false, right: false };

const animationReducer = (state, action) => {
  switch (action) {
    case 'left':
      return { left: true, right: false };
    case 'right':
      return { left: false, right: true };
    default:
      return initialState;
  }
};

const Controls = ({ history, location }) => {
  const { setSelectedProject, selectedProject } = useContext(LocalDataContext);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [animateState, dispatchAnimate] = useReducer(
    animationReducer,
    initialState,
  );

  // go to previous project
  const goPrev = () => {
    const i = selectedIdx <= 0 ? projects.length - 1 : selectedIdx - 1;
    dispatchAnimate('left');
    handleChange(i);
  };

  // go to next project
  const goNext = () => {
    const i = selectedIdx >= projects.length - 1 ? 0 : selectedIdx + 1;
    dispatchAnimate('right');
    handleChange(i);
  };

  // select project change url params
  const handleChange = i => {
    setSelectedIdx(i);
    setSelectedProject({ project: projects[i] });
    history.push(`/?day=${i + 1}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const i = parseInt(params.get('day')) - 1;
    handleChange(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledControls>
      <Title />
      <NavStyles {...animateState}>
        <button
          className="nav-btn prev-btn"
          onClick={goPrev}
          onAnimationEnd={dispatchAnimate}>
          <i className="nav-btn__arrow left" />
        </button>
        <h3 className="project-title">{selectedProject.project.title}</h3>
        <button
          className="nav-btn next-btn"
          onClick={goNext}
          onAnimationEnd={dispatchAnimate}>
          <i className="nav-btn__arrow right" />
        </button>
      </NavStyles>
      <div className="description-container">
        <p>
          A a collection of 100 builds over the course of 100 days to strengthen
          CSS layout, transition, and animation skills.
        </p>
      </div>
    </StyledControls>
  );
};

Controls.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Controls);
