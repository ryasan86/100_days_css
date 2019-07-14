import React from 'react';

import StyledControls from '../styles/ControlsStyles';
import Title from './Title';

const Controls = () => {
  return (
    <StyledControls>
      <Title />
      <div class="nav-controls">nav controls here</div>
      <div class="description-container">
        <p>
          A a collection of 100 CSS builds to work on UI interaction,
          animations, and general styling skills
        </p>
      </div>
    </StyledControls>
  );
};

export default Controls;
