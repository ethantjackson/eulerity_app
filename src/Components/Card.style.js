import styled, { css } from 'styled-components';

export const Card = styled.div`
  height: 500px;
  display: inline-block;
  perspective: 1000px;
  text-align: center;
`;

export const CardImg = styled.img`
  height: 100%;
  transition: all 1s;
  border-radius: 1rem;
  filter: brightness(${(props) => props.brightness});
`;

export const CardInner = styled.div`
  position: relative;
  top: -100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
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
  ${CardImg}:hover & {
    border: 10px solid purple;
  }
`;
export const CardBack = styled.div`
  ${frontBackStyles}
  transform: rotateY(180deg);
`;

export const BackText = styled.div`
  padding: 2rem;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  i {
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    bottom: 2rem;
  }
`;
