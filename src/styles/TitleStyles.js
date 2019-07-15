import styled from 'styled-components';

const StyledTitle = styled.div`
  color: white;
  position: relative;
  display: flex;

  .numbers-container {
    display: flex;
    position: relative;
    width: 200px;

    .one {
      width: 25px;
      height: 100px;
      border-radius: 5px;
      background: white;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.8);
      position: relative;
      z-index: 2;

      &:before {
        content: '';
        position: absolute;
        background: white;
        width: 25px;
        height: 50px;
        top: 0;
        left: -20px;
        border-radius: 5px;
        transform: rotate(50deg);
      }
    }

    .zero {
      width: 100px;
      height: 100px;
      border: 25px solid white;
      border-radius: 50%;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.8);
      position: absolute;

      &.zero-1 {
        right: 87px;
        z-index: 1;
      }

      &.zero-2 {
        right: 0;
      }
    }
  }

  .text-container {
    text-transform: uppercase;
    margin-left: 10px;

    .text {
      margin: 0;
      line-height: 0.97;
      &.big {
        font-size: 80px;
        font-weight: 600;
      }

      &.small {
        font-size: 24px;
      }
    }
  }
`;

export default StyledTitle;
