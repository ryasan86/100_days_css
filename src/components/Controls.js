import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { projects, LocalDataContext } from '../provider';
import StyledControls from '../styles/ControlsStyles';
import Title from './Title';

const Controls = props => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { selectedProject, setSelectedProject } = useContext(LocalDataContext);

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
    setSelectedProject(projects[i]);
    props.history.push(`/?day=${i + 1}`);
  };

  return (
    <StyledControls>
      <Title />
      <div className="nav-controls">
        <button onClick={goPrev}>prev</button>
        <button onClick={goNext}>next</button>
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

export default withRouter(Controls);
