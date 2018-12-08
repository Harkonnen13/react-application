import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import Base from '../ComponentBase';

/**
 * Card base class
 */
class CardBase extends Base.PureComponentBase {

  renderCard = () =>{

  }

  render() {
    return (
      <div className={`${this.className}-wrapper ${this.props.className || ''}`}>
        {this.renderCard()}
      </div>
    );
  }
}

export default CardBase;