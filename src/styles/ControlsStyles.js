import styled, { keyframes, css } from 'styled-components';

const scoopWidth = '150%';

const StyledControls = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    200deg,
    #101010 1%,
    #181818 50%,
    #202020 75%,
    #282828 90%,
    #303030 100%
  );
  background-image: linear-gradient(147deg, #002f4e 0%, #04619f 74%);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  &:before {
    content: '';
    height: ${scoopWidth};
    width: ${scoopWidth};
    position: absolute;
    background: white;
    border-radius: 50%;
    left: -130%;
    top: calc(-${scoopWidth} / 6);
  }

  .description-container {
    max-width: 350px;
  }
`;

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
  margin-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-btn {
    margin: 0;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    z-index: 10;

    .nav-btn__arrow {
      border: solid white;
      border-width: 0 0.4rem 0.4rem 0;
      display: inline-block;
      padding: 3px;
      height: 3rem;
      width: 3rem;

      &.left {
        transform: rotate(135deg);
        ${props => props.left && squishLeftCSS};
      }
      &.right {
        transform: rotate(-45deg);
        ${props => props.right && squishRightCSS};
      }
    }
  }

  h3 {
    width: 23rem;
    text-align: center;
    margin: 0;
  }
`;

export { NavStyles };
export default StyledControls;
