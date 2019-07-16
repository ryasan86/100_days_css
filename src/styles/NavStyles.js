import styled, { keyframes, css } from 'styled-components';

const squishLeft = keyframes`
  0% {
    transform: rotate(135deg);
  }
  50% {
    transform: rotate(150deg) skew(30deg);
  }
  100% {
    transform: rotate(135deg);
  }
`;

const squishRight = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-35deg) skew(30deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`;

const squishLeftCSS = css`
  animation: ${squishLeft} 0.3s ease-out;
`;

const squishRightCSS = css`
  animation: ${squishRight} 0.3s ease-out;
`;

const NavStyles = styled.div`
  margin-left: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.8s ease;
  ${props => props.nav};
  @media (max-width: 1150px) {
    margin-left: 0;
  }

  .nav-btn {
    margin: 0;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    z-index: 10;
    background: white;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      background: #ecf0f1;
    }

    .nav-btn__arrow {
      border: solid #075a97;
      border-width: 0 0.4rem 0.4rem 0;
      display: inline-block;
      padding: 0.2rem;
      height: 2rem;
      width: 2rem;
      position: relative;

      &.left {
        left: 0.4rem;
        transform: rotate(135deg);
        ${props => props.left && squishLeftCSS};
      }
      &.right {
        right: 0.4rem;
        transform: rotate(-45deg);
        ${props => props.right && squishRightCSS};
      }
    }
  }

  h3 {
    width: 23rem;
    font-size: 2.4rem;
    text-align: center;
    margin: 0;
  }
`;

export default NavStyles;
