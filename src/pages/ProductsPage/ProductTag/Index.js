import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';

/**
 * Product tag (hit, hot, vegetarian etc.)
 * @param {*} name 
 */
const ProductTag = ({ className, title, children }) => {
  return (
    <div className={`productTag ${className}`} 
         title={title}>
      {children}
    </div>
  );
}

export default ProductTag;