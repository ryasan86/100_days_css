import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { LocalDataContext } from '../provider';
import StyledProject from '../styles/ProjectStyles';
import Codepen from './Codepen';

const initialState = {
  opacity: 0,
};

const Project = () => {
  const [animateProps, setAnimateProps] = useState(initialState);
  const {
    selectedProject: { project },
  } = useContext(LocalDataContext);

  useEffect(() => setAnimateProps({ opacity: 1, transform: 'translateY(0)' }), []);

  return (
    <StyledProject animateProps={animateProps}>
      {project ? (
        <Codepen hash={project.hash} title={project.title} />
      ) : (
        <p>Project Not Found ☹</p>
      )}
    </StyledProject>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  hash: PropTypes.string,
};

export default Project;
