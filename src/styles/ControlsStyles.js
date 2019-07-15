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

  .nav-controls {
    margin-left: 200px;
  }

  .description-container {
    max-width: 350px;
  }
`;

export default StyledControls;
