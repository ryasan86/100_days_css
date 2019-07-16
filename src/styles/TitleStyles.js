import styled from 'styled-components';

const StyledTitle = styled.div`
  color: white;
  position: relative;
  display: flex;
  transition: all 0.8s ease;
  ${props => props.animateState};

  .numbers-container {
    display: flex;
    position: relative;
    width: 20rem;

    .one {
      width: 2.5rem;
      height: 10rem;
      border-radius: 0.5rem;
      background: white;
      box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.8);
      position: relative;
      z-index: 2;

      &:before {
        content: '';
        position: absolute;
        background: white;
        width: 2.5rem;
        height: 5rem;
        top: 0;
        left: -2rem;
        border-radius: 0.5rem;
        transform: rotate(50deg);
      }
    }

    .zero {
      width: 10rem;
      height: 10rem;
      border: 2.5rem solid white;
      border-radius: 50%;
      box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.8);
      position: absolute;

      &.zero-1 {
        right: 8.7rem;
        z-index: 1;
      }

      &.zero-2 {
        right: 0;
      }
    }
  }

  .text-container {
    text-transform: uppercase;
    margin-left: 1rem;

    .text {
      margin: 0;
      line-height: 0.97;
      &.big {
        font-size: 8rem;
        font-weight: 600;
      }

      &.small {
        font-size: 2.4rem;
      }
    }
  }
`;

export default StyledTitle;
