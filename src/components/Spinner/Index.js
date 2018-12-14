import React from 'react';
import './Styles.less';

/**
 * Loading animated spinner
 */
const Spinner = ({hide = false}) => {
  return (
    <div className={`spinner${hide ? ' spinner_hide' : ''}`}>
      <div className='spinner__block'/>
      <div className='spinner__block'/>
      <div className='spinner__block'/>
    </div>
  );
}

export default Spinner;