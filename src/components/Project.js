import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LocalDataContext } from '../provider';
import StyledProject from '../styles/ProjectStyles';
import Codepen from './Codepen';

const Project = () => {
  const {
    selectedProject: { project },
  } = useContext(LocalDataContext);

  return (
    <StyledProject data-aos="fade-in">
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
