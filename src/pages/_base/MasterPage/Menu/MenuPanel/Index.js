import './Styles.less';

import React from 'react';

const MenuPanel = ({showPhone, showMenu, children}) => {
  return(
    <div className='menuPanel'>
      {
        showPhone &&
        <span className='menuPanel-phone'>
          8 (800) 960-01-01
        </span>
      }
      { showMenu && children }
    </div> 
  )
};

export default MenuPanel;