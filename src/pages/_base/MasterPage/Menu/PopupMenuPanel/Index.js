import './Styles.less';

import React from 'react';

const PopupMenuPanel = ({showPhone, isOpen, children}) => {
  const hidden = !isOpen ? 'popupMenuPanel-hide' : '';
  return (
    <div className={`popupMenuPanel ${hidden}`}>
      { 
        showPhone &&  
          <span className='popupMenuPanel-phone'>
            8 (800) 960-01-01
          </span>
      }
      {children}
    </div>
  );
}

export default PopupMenuPanel;