import React from 'react';
import {
  Card,
  CardInner,
  CardFront,
  CardBack,
  CardImg,
  BackText,
} from './Card.style';
import Moment from 'moment';

const PetCard = ({ img, title, date, description }) => {
  return (
    <Card>
      <img src={img} alt='placeholder' style={{ height: '100%', opacity: 0 }} />
      <CardInner>
        <CardFront>
          <CardImg brightness={1} src={img} alt='pet-img' />
        </CardFront>
        <CardBack>
          <CardImg
            brightness={0.4}
            src={img}
            alt='pet-img'
            style={{ transform: 'scaleX(-1)' }}
          />
          <BackText>
            <h3>{title}</h3>
            <p>{description}</p>
            <i>Posted: {Moment(date).format('MMM Do, YYYY')}</i>
          </BackText>
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default PetCard;
