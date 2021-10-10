import React, { useEffect, useState } from 'react';
import PetCard from './Components/PetCard';
import Preloader from './Components/Preloader';
import PetSelector from './Components/PetSelector';
import ActionBtn from './Components/ActionBtn';
import { CardContainer } from './Components/Card.style';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [selections, setSelections] = useState([]);
  useEffect(() => {
    axios.get('http://eulerity-hackathon.appspot.com/pets').then((res) => {
      setPets(res.data);
    });
  }, []);

  const selectAll = () => {
    setSelections([...pets]);
  };

  const clearAll = () => {
    setSelections([]);
  };

  const select = (pet) => {
    if (
      !selections.find((selection) => {
        return selection.title === pet.title;
      })
    ) {
      setSelections([...selections, pet]);
    }
  };

  const deselect = (pet) => {
    setSelections(
      selections.filter((selection) => selection.title !== pet.title)
    );
  };

  if (pets.length === 0) return <Preloader />;

  return (
    <div className='container'>
      <PetSelector selections={selections} deselect={deselect} />
      <CardContainer>
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} select={select} />
        ))}
        <ActionBtn selectAll={selectAll} clearAll={clearAll} />
      </CardContainer>
    </div>
  );
};

export default Pets;
