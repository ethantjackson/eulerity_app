import React, { useState } from 'react';
import { SearchBarInput } from './Selector.style';
import 'materialize-css/dist/css/materialize.min.css';

const SearchBar = ({ search }) => {
  const [searchVal, setSearchVal] = useState('');
  return (
    <>
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
    </>
  );
};

export default SearchBar;
