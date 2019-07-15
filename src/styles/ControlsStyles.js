import styled from 'styled-components';

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

  .nav-container {
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

      .nav-btn__arrow {
        border: solid white;
        border-width: 0 0.4rem 0.4rem 0;
        display: inline-block;
        padding: 3px;
        height: 3rem;
        width: 3rem;
        &.left {
          transform: rotate(135deg);
        }
        &.right {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .description-container {
    max-width: 350px;
  }
`;

export default StyledControls;
