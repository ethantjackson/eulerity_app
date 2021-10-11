import styled from 'styled-components';

export const AboutAreaContainer = styled.div`
  height: ${(props) => props.height || '25vh'};
  padding: 1vh 0.5vh;
`;

export const AboutArea = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  text-align: left;
  border: 3px solid rgb(33, 33, 23);
  border-radius: 2rem;
  transition: 0.5s all;
  padding: 3% 10%;
  overflow-y: auto;

  &:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 5px #b9b9b9;
  }

  i {
    position: relative;
    top: 0.25rem;
    left: -0.5rem;
    font-size: 2.5rem;
  }

  p {
    color: rgb(43, 43, 23);
    line-height: calc(1vh + 1.5rem);
    font-size: calc(0.5vh + 1rem);
  }

  h4,
  h5,
  h6 {
    color: ${(props) => props.color || 'black'};
  }
`;

export const AboutImgContainer = styled.div`
  height: calc(5rem + 10vh);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const AboutImg = styled.img`
  margin-bottom: 1rem;
  border-radius: 1rem;
  height: 100%;
`;
