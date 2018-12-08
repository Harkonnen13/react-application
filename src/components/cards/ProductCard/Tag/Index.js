import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';

const tagMap = {
  HIT: { desc: 'Популярное блюдо',     style: 'badge badge-primary' },
  HOT: { desc: 'Острое блюдо',         style: 'badge badge-danger' },
  VEG: { desc: 'Вегетарианское блюдо', style: 'badge badge-success' },
  NEW: { desc: 'Новое блюдо',          style: 'badge badge-dark' },
};

/**
 * Product tag (hit, hot, vegetarian etc.)
 * @param {*} name 
 */
const Tag = ({ name }) => {
  const tag = tagMap[name];
  return (
    <div className={`tag ${tag.style}`} 
         title={tag.desc}>
      {name}
    </div>
  );
}

export default Tag;