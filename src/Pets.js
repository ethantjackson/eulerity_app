import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'moment';

const Pets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios.get('http://eulerity-hackathon.appspot.com/pets').then((res) => {
      setPets(res.data);
    });
  }, []);

  if (pets.length === 0) return <div>loading...</div>;

  return (
    <div>
      {pets.map((pet, index) => (
        <div key={index}>
          <h2> {pet.title}</h2>
          <img src={pet.url} alt='pet-img' height='500' />
          <p>{pet.description}</p>
          <i>{Moment(pet.created).format('MMM Do, YYYY')}</i>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Pets;
