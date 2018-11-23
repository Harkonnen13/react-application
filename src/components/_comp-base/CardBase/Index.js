import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';

class CardBase extends PureComponent {
  constructor(props){
    super(props);
  }

  renderCard = () =>{

  }

  getColumns = () =>{
    return '';
  }

  render() {
    return (
      <div className={`cardBase-wrapper ${this.getColumns()}`}>
        {this.renderCard()}
      </div>
    );
  }
}

export default CardBase;