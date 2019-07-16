import styled, { keyframes } from 'styled-components';

const octocatWave = keyframes`
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
`;

const StyledGithubSVG = styled.svg`
  @media (max-width: 1000px) {
    fill: #fff;
    & > path:first-of-type {
      fill: #075a97;
    }
  }

  &:hover {
    .octo-arm {
      animation: ${octocatWave} 560ms ease-in-out;
      @media (max-width: 425px) {
        animation: none;
      }
    }
  }
`;

export default StyledGithubSVG;
