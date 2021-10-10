import React from 'react';
import { SelectionItem, SelectorContainer } from './Selector.style';

const PetSelector = ({ selections, deselect }) => {
  return (
    <SelectorContainer>
      {selections.length > 0 && <p>Selected:</p>}
      {selections.map((pet, index) => (
        <SelectionItem key={index} onClick={() => deselect(pet)}>
          <i className='material-icons tiny'>clear</i>
          {pet.title}
        </SelectionItem>
      ))}
    </SelectorContainer>
  );
};

export default PetSelector;
