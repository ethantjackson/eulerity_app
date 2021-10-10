import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardInner,
  CardFront,
  CardBack,
  CardImg,
  BackText,
} from './Card.style';
import Moment from 'moment';

const PetCard = ({ pet }) => {
  const selections = useSelector((state) => state.selectedPets);
  const dispatch = useDispatch();

  const select = (pet) => {
    if (
      !selections.find((selection) => {
        return selection.title === pet.title;
      })
    ) {
      dispatch({ type: 'SET_SELECTED_PETS', payload: [...selections, pet] });
    }
  };

  return (
    <Card onClick={() => select(pet)}>
      <img
        src={pet.url}
        alt='placeholder'
        style={{ height: '100%', opacity: 0 }}
      />
      <CardInner>
        <CardFront>
          <CardImg brightness={1} src={pet.url} alt='pet-img' />
        </CardFront>
        <CardBack>
          <CardImg
            brightness={0.4}
            src={pet.url}
            alt='pet-img'
            style={{ transform: 'scaleX(-1)' }}
          />
          <BackText>
            <h5>{pet.title}</h5>
            <p>{pet.description}</p>
            <i>{Moment(pet.created).format('MMM Do, YYYY')}</i>
          </BackText>
        </CardBack>
      </CardInner>
    </Card>
  );
};

export default PetCard;
