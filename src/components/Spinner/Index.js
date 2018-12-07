import React from 'react';
import './Styles.less';

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='spinner-block'></div>
      <div className='spinner-block'></div>
      <div className='spinner-block'></div>
    </div>
  );
}

export default Spinner;