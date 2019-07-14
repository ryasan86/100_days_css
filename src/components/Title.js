import React from 'react';
import StyledTitle from '../styles/TitleStyles';

const Title = () => {
  return (
    <StyledTitle>
      <div class="numbers-container">
        <div class="one" />
        <div class="zero zero-1" />
        <div class="zero zero-2" />
      </div>
      <div className="text-container">
        <h1 class="text big">days</h1>
        <h3 class="text small">css challenge</h3>
      </div>
    </StyledTitle>
  );
};

export default Title;
