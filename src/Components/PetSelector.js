import React, { useEffect } from 'react';
import {
  SelectionItem,
  SelectorContainer,
  SelectionItemsContainer,
  SelectionActionBtns,
} from './Selector.style';
import { saveAs } from 'file-saver';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const PetSelector = ({ selections, deselect, toggleSearch }) => {
  useEffect(() => {
    var tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips, {});
  }, []);

  const download = () => {
    if (selections.length !== 0) {
      selections.forEach((selection) => {
        saveAs(selection.url, selection.title + '.jpg');
      });
    } else {
      M.toast({ html: 'Please select photos to download' });
    }
  };

  return (
    <SelectorContainer>
      <SelectionItemsContainer>
        {selections.length > 0 && <p>Selected:</p>}
        {selections.map((pet, index) => (
          <SelectionItem key={index} onClick={() => deselect(pet)}>
            <i className='material-icons tiny'>clear</i>
            {pet.title}
          </SelectionItem>
        ))}
      </SelectionItemsContainer>
      <SelectionActionBtns>
        <a
          href='#!'
          className='btn-floating btn-large waves-effect waves-light blue darken-1 tooltipped'
          data-tooltip='Download'
          data-position='top'
          onClick={download}
        >
          <i className='material-icons'>file_download</i>
        </a>
        <a
          href='#!'
          className='btn-floating btn-large waves-effect waves-light red tooltipped'
          data-tooltip='Search'
          data-position='top'
          onClick={toggleSearch}
        >
          <i className='material-icons'>search</i>
        </a>
      </SelectionActionBtns>
    </SelectorContainer>
  );
};

export default PetSelector;
