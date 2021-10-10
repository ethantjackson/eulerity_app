import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBarInput, SearchBarContainer } from './Selector.style';
import 'materialize-css/dist/css/materialize.min.css';

const SearchBar = () => {
  const petOptions = useSelector((state) => state.petOptions);
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState('');

  const search = (keyword) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    dispatch({
      type: 'SET_PET_RESULTS',
      payload: [
        ...petOptions.filter(
          (pet) =>
            pet.title.toLowerCase().includes(lowerCaseKeyword) ||
            pet.description.toLowerCase().includes(lowerCaseKeyword)
        ),
      ],
    });
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        type='text'
        className='browser-default'
        placeholder='search...'
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
          search(e.target.value);
        }}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
