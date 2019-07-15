import React, { useContext } from 'react';

import { LocalDataContext } from '../provider';
import StyledProject from '../styles/ProjectStyles';
import Codepen from './Codepen';

const Project = () => {
  const { selectedProject: { title, hash } } = useContext(LocalDataContext);

  return (
    <StyledProject>
      <Codepen hash={hash} title={title} />
    </StyledProject>
  );
};

export default Project;
