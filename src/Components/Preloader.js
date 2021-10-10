import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const Preloader = () => {
  return (
    <div className='preloader-wrapper big active' style={{ marginTop: '30vh' }}>
      <div className='spinner-layer spinner-blue-only'>
        <div className='circle-clipper left'>
          <div className='circle'></div>
        </div>
        <div className='gap-patch'>
          <div className='circle'></div>
        </div>
        <div className='circle-clipper right'>
          <div className='circle'></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;