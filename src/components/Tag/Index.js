import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';

class Tag extends PureComponent {

  static get tagMap(){
    return {
      HIT: { desc: 'Популярное блюдо',     style: 'badge badge-primary' },
      HOT: { desc: 'Острое блюдо',         style: 'badge badge-danger' },
      VEG: { desc: 'Вегетарианское блюдо', style: 'badge badge-success' },
      NEW: { desc: 'Новое блюдо',          style: 'badge badge-dark' },
    };
  }

  constructor(props){
    super(props);
  }

  render() {
    let tag = Tag.tagMap[this.props.name];
    return (
      <div className={`tag ${tag.style}`} 
           title={tag.desc}>
        {this.props.name}
      </div>
    );
  }
}

export default Tag;