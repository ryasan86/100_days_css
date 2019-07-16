import styled from 'styled-components';

const scoopWidth = '150%';

const StyledControlsView = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(147deg, #002f4e 0%, #04619f 74%);
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
    z-index: 10;
    @media (max-width: 1150px) {
      margin-left: 0;
      display: none;
    }
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 250px;
    transition: all 0.3s;

    @media (max-width: 1350px) {
      margin-left: 150px;
    }
    @media (max-width: 1150px) {
      margin-left: 0;
      align-items: center;
    }
  }

  .description {
    margin: 0;
    max-width: 350px;
    font-size: 2rem;
    transition: all 0.8s ease;
    ${props => props.animateState};
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

export default StyledControlsView;
