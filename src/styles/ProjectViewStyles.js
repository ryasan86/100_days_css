import styled from 'styled-components';

const StyledProjectView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.8s ease 0.6s;
  ${props => props.animateProps};

  p {
    color: #075a97;
  }
`;

export default StyledProjectView;
