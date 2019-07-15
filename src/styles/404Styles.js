import styled from 'styled-components';

const StyledPageNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #075a97;
    margin-top: 20%;
  }

  button {
    background: 0;
    border: 3px solid #075a97;
    color: #075a97;
    font-size: 2rem;
    border-radius: 2rem;
    padding: 0.2rem 2rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background: #075a97;
      color: white;
    }
  }
`;

export default StyledPageNotFound;
