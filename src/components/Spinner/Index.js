import React from 'react';
import './Styles.less';

/**
 * Loading animated spinner
 */
const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='spinner-block'/>
      <div className='spinner-block'/>
      <div className='spinner-block'/>
    </div>
  );
}

export default Spinner;