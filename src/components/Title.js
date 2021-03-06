import React, { useState, useEffect } from 'react';
import StyledTitle from '../styles/TitleStyles';

const Title = () => {
  const [animateState, setAnimateProps] = useState({
    opacity: 0,
    transform: 'translateX(100%)',
  });

  useEffect(setAnimateProps, []);

  return (
    <StyledTitle animateState={animateState}>
      <div className="numbers-container">
        <div className="number one" />
        <div className="number zero zero-1" />
        <div className="number zero zero-2" />
      </div>
      <div className="text-container">
        <h1 className="text big">days</h1>
        <h3 className="text small">css challenge</h3>
      </div>
    </StyledTitle>
  );
};

export default Title;
