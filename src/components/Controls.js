import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import StyledControls from '../styles/ControlsStyles';
import Title from './Title';

const projects = [
  { title: '001 Title', hash: 'rEgzmB' },
  { title: '002 Menu Icon', hash: 'agxrqY' },
  { title: '084 Book Cover', hash: 'vqMOYQ' },
];

const Controls = props => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const goPrev = () => {
    const i = selectedIdx <= 0 ? projects.length - 1 : selectedIdx - 1;
    setSelectedIdx(i);
    handleRouteChange(i);
  };

  const goNext = () => {
    const i = selectedIdx >= projects.length - 1 ? 0 : selectedIdx + 1;
    setSelectedIdx(i);
    handleRouteChange(i);
  };

  const handleRouteChange = (i) => {
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
