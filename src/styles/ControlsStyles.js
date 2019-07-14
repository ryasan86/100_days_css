import styled from 'styled-components';

const scoopWidth = '150%';

const StyledControls = styled.div`
  height: 100%;
  background: linear-gradient(
    135deg,
    #101010 1%,
    #1a1a1a 50%,
    #242424 75%,
    #2e2e2e 90%,
    #393939 100%
  );
  color: white;
  position: relative;
  overflow: hidden;

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
`;

export default StyledControls;
