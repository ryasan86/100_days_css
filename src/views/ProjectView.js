import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { LocalDataContext } from '../provider';
import StyledProject from '../styles/ProjectViewStyles';
import Codepen from '../components/Codepen';

const initialState = {
  opacity: 0,
};

const ProjectView = () => {
  const [animateProps, setAnimateProps] = useState(initialState);
  const { selectedProject: { project } } = useContext(LocalDataContext);

  useEffect(setAnimateProps, []);

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

ProjectView.propTypes = {
  title: PropTypes.string,
  hash: PropTypes.string,
};

export default ProjectView;
