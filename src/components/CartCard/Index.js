import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import CardBase from '../_comp-base/CardBase';
import ImageBox from '../ImageBox';
import ValueSelector from '../ValueSelector';

class CartCard extends CardBase {
  constructor(props){
    super(props);
    this.state = {
      price: this.props.data.price * this.props.count
    };
  }

  onCountChange = (count) => {
    if(count > 0){
      this.props.update(this.props.data, count);
      this.setState({price: this.props.data.price * count});
    } 
    else{
      this.props.delete(this.props.data);
    }
  }

  renderCard = () => {
    return (
      <div className='cartCard card'>
          <div className='cartCard-img col-5 col-sm-3 col-md-2 col-lg-2'>
              <ImageBox src={this.props.data.src}/>
          </div>
          <div className='cartCard-info col col-sm-9 col-md-10 col-xl-5 container'>
              <div className='cartCard-title'>{this.props.data.name}</div>
          </div>
          <div className='cartCard-count col-6 col-xl-3'>
            <ValueSelector min={0}
                           max={30} 
                           value={this.props.count}
                           onValueChanged={this.onCountChange}/>
          </div>
          <div className='cartCard-price col-6 col-xl-2'>
            {this.state.price} &#x20bd;
          </div>
        </div>
    );
  }
}

export default CartCard;