import React, { useEffect, useState } from 'react';
import PetCard from './Components/PetCard';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

const Pets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios.get('http://eulerity-hackathon.appspot.com/pets').then((res) => {
      setPets(res.data);
    });
  }, []);

  if (pets.length === 0) return <div>loading...</div>;

  return (
    <div className='container'>
      {pets.map((pet, index) => (
        <div key={index}>
          <PetCard
            title={pet.title}
            img={pet.url}
            date={pet.created}
            description={pet.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Pets;
