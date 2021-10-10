import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  height: calc(90vh - 4.6rem);
  overflow-y: auto;
  overflow-x: hidden;
`;
export const Card = styled.div`
  height: calc(10rem + 10vh);
  display: inline-block;
  perspective: 2000px;
  margin-bottom: 2rem;
  cursor: pointer;
  max-width: 90vw;
`;

export const CardImg = styled.img`
  max-width: 90vw;
  height: 100%;
  border-radius: 1rem;
  filter: brightness(${(props) => props.brightness});
`;

export const CardInner = styled.div`
  position: relative;
  top: -100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
    z-index: 10;
  }
`;

const frontBackStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
export const CardFront = styled.div`
  ${frontBackStyles}
`;
export const CardBack = styled.div`
  ${frontBackStyles}
  transform: rotateY(180deg);
`;

export const BackText = styled.div`
  padding: 2%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  i {
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    bottom: 2%;
  }
`;
