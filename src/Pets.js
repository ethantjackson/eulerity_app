import React, { useEffect, useState } from 'react';
import PetCard from './Components/PetCard';
import Preloader from './Components/Preloader';
import PetSelector from './Components/PetSelector';
import ActionBtn from './Components/ActionBtn';
import SearchBar from './Components/SearchBar';
import { CardContainer } from './Components/Card.style';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

const Pets = () => {
  const [petOptions, setPetOptions] = useState([]);
  const [pets, setPets] = useState([]);
  const [selections, setSelections] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    axios.get('http://eulerity-hackathon.appspot.com/pets').then((res) => {
      setPetOptions(res.data);
      setPets(res.data);
    });
  }, []);

  const selectAll = () => {
    setSelections([...pets]);
  };

  const clearAll = () => {
    setSelections([]);
  };

  const shuffle = () => {
    let shuffledPets = pets;
    let currIdx = shuffledPets.length,
      randIdx;
    while (currIdx !== 0) {
      randIdx = Math.floor(Math.random() * currIdx);
      currIdx--;

      [shuffledPets[currIdx], shuffledPets[randIdx]] = [
        shuffledPets[randIdx],
        shuffledPets[currIdx],
      ];
    }

    setPets([...shuffledPets]);
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

  const search = (keyword) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    setPets(
      petOptions.filter(
        (pet) =>
          pet.title.toLowerCase().includes(lowerCaseKeyword) ||
          pet.description.toLowerCase().includes(lowerCaseKeyword)
      )
    );
  };

  if (petOptions.length === 0) return <Preloader />;

  return (
    <div className='container'>
      <PetSelector
        selections={selections}
        deselect={deselect}
        toggleSearch={() => {
          setShowSearch(!showSearch);
          setPets(petOptions);
        }}
      />
      <CardContainer>
        {showSearch && <SearchBar search={search} />}
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} select={select} />
        ))}
        <ActionBtn
          selectAll={selectAll}
          clearAll={clearAll}
          shuffle={shuffle}
        />
      </CardContainer>
    </div>
  );
};

export default Pets;
