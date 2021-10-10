import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PetCard from './Components/PetCard';
import Preloader from './Components/Preloader';
import PetSelector from './Components/PetSelector';
import ActionBtn from './Components/ActionBtn';
import SearchBar from './Components/SearchBar';
import { CardContainer } from './Components/Card.style';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

const Pets = () => {
  const petOptions = useSelector((state) => state.petOptions);
  const petResults = useSelector((state) => state.petResults);
  const searching = useSelector((state) => state.searching);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://eulerity-hackathon.appspot.com/pets').then((res) => {
      dispatch({ type: 'SET_PET_OPTIONS', payload: res.data });
      dispatch({ type: 'SET_PET_RESULTS', payload: res.data });
    });
    //eslint-disable-next-line
  }, []);

  if (petOptions.length === 0) return <Preloader />;

  return (
    <div className='container'>
      <PetSelector />
      <CardContainer>
        {searching && <SearchBar />}
        {petResults.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
        <ActionBtn />
      </CardContainer>
    </div>
  );
};

export default Pets;
