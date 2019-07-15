import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { projects, LocalDataContext } from '../provider';
import StyledControls from '../styles/ControlsStyles';
import Title from './Title';

const Controls = ({ history, location }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { setSelectedProject } = useContext(LocalDataContext);

  // go to previous project
  const goPrev = () => {
    const i = selectedIdx <= 0 ? projects.length - 1 : selectedIdx - 1;
    handleChange(i);
  };

  // go to next project
  const goNext = () => {
    const i = selectedIdx >= projects.length - 1 ? 0 : selectedIdx + 1;
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
      <div className="nav-container">
        <button className="nav-btn prev-btn" onClick={goPrev}>
          <i className="nav-btn__arrow left" />
        </button>
        <div className="nav-project-container">
          <h3>{selectedIdx}</h3>
        </div>
        <button className="nav-btn next-btn" onClick={goNext}>
          <i className="nav-btn__arrow right" />
        </button>
      </div>
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
