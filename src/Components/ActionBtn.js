import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const ActionBtn = ({ selectAll, clearAll, shuffle }) => {
  useEffect(() => {
    var fabs = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fabs, { direction: 'top' });

    var tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips, {});
  }, []);

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
