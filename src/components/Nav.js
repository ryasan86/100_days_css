import React, { useState, useReducer, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { projects, LocalDataContext } from '../provider';
import NavStyles from '../styles/NavStyles';

// default animation state
const initialState = {
  left: false,
  right: false,
  nav: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
};

// keep track of state for nav and arrow animation
const animationReducer = (state, action) => {
  switch (action) {
    case 'NAV_ENTER':
      return { ...state, nav: null };
    case 'LEFT_ARROW_CLICK':
      return { ...state, left: true, right: false };
    case 'RIGHT_ARROW_CLICK':
      return { ...state, left: false, right: true };
    default:
      return { ...state, left: false, right: false };
  }
};

const Nav = ({ history, location }) => {
  const { setSelectedProject, selectedProject } = useContext(LocalDataContext);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [animateState, dispatchAnimate] = useReducer(
    animationReducer,
    initialState,
  );

  // go to previous project
  const goPrev = () => {
    const i = selectedIdx <= 0 ? projects.length - 1 : selectedIdx - 1;
    dispatchAnimate('LEFT_ARROW_CLICK');
    handleChange(i);
  };

  // go to next project
  const goNext = () => {
    const i = selectedIdx >= projects.length - 1 ? 0 : selectedIdx + 1;
    dispatchAnimate('RIGHT_ARROW_CLICK');
    handleChange(i);
  };

  // select project change url params
  const handleChange = i => {
    setSelectedIdx(i);
    setSelectedProject({ project: projects[i] });
    history.push(`/?day=${i + 1}`);
  };

  // grabs day index from url params in case user manually enters index or refreshes page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const i = parseInt(params.get('day')) - 1;
    handleChange(i ? i : 0);
    dispatchAnimate('NAV_ENTER');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavStyles {...animateState}>
      <button
        className="nav-btn prev-btn"
        onClick={goPrev}
        onAnimationEnd={dispatchAnimate}>
        <i className="nav-btn__arrow left" />
      </button>
      <h3>
        {(selectedProject.project && selectedProject.project.title) || (
          <span>☹</span>
        )}
      </h3>
      <button
        className="nav-btn next-btn"
        onClick={goNext}
        onAnimationEnd={dispatchAnimate}>
        <i className="nav-btn__arrow right" />
      </button>
    </NavStyles>
  );
};

Nav.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Nav);
