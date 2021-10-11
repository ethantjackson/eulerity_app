import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const ActionBtn = () => {
  const petResults = useSelector((state) => state.petResults);
  const dispatch = useDispatch();

  useEffect(() => {
    var fabs = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fabs, { direction: 'top' });

    var tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips, {});
  }, []);

  const selectAll = () => {
    dispatch({ type: 'SET_SELECTED_PETS', payload: [...petResults] });
  };

  const clearAll = () => {
    dispatch({ type: 'SET_SELECTED_PETS', payload: [] });
  };

  const shuffle = () => {
    let shuffledPets = petResults;
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

    dispatch({ type: 'SET_PET_RESULTS', payload: [...shuffledPets] });
  };

  return (
    <div
      className='fixed-action-btn'
      style={{ marginRight: 'calc(15% - 5rem)' }}
    >
      <a href='#!' className='btn-floating btn-large black'>
        <i className='large material-icons'>menu</i>
      </a>
      <ul>
        <li>
          <a
            href='#!'
            className='btn-floating red tooltipped'
            data-tooltip='Clear All'
            data-position='left'
          >
            <i className='material-icons' onClick={clearAll}>
              clear
            </i>
          </a>
        </li>
        <li>
          <a
            href='#!'
            className='btn-floating blue darken-1 tooltipped'
            data-tooltip='Select All'
            data-position='left'
          >
            <i className='material-icons' onClick={selectAll}>
              done_all
            </i>
          </a>
        </li>
        <li>
          <a
            href='#!'
            className='btn-floating grey darken-1 tooltipped'
            data-tooltip='Shuffle'
            data-position='left'
          >
            <i className='material-icons' onClick={shuffle}>
              cached
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ActionBtn;
