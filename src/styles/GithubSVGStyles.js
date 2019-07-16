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
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  fill: #075a97;
  cursor: pointer;

  path {
    &:first-child {
      fill: #fff;
    }
    &:nth-child(2) {
      -webkit-transform-origin: 130px 106px;
      transform-origin: 130px 106px;
    }
  }

  @media (max-width: 1000px) {
    path {
      fill: #fff;
      &:first-child {
        fill: #075a97;
      }
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
