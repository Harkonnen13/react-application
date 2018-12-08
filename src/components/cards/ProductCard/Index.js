import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';
import $ from 'jquery';

import React from 'react';
import CardBase from '../../_comp-base/CardBase';
import Tag from './Tag';
import ImageBox from '../../ImageBox';

/**
 * Product card
 */
class ProductCard extends CardBase {
  constructor(props){
    super(props);
    this.card = React.createRef();
  }

  onAddToCart = () => {
    this.props.addCartItem(this.props.product);
  }

  componentDidMount(){
    requestAnimationFrame(() => {
      $(this.card.current).removeClass('productCard-hide');
    });
  }

  renderIng(ing, idx){
    return (
      <li className='productCard-ing' key={idx}>{ing}</li>
    )
  }

  renderTag(tag, idx){
    return (
      <Tag key={idx} name={tag}/>
    )
  }

  renderCard = () => {
    return (
      <div ref={this.card} className='productCard card productCard-hide'>
          <div className='productCard-tags'>
            {this.props.product.tag.map(this.renderTag)}
          </div>
          <div className='productCard-body card-body'>
            <ImageBox src={this.props.product.src}/>
            <div className='productCard-title card-title'>
              {this.props.product.name}
            </div>
            <div className='flex-grow-1'>
              <ul className='productCard-ings'>
                {this.props.product.ing.map(this.renderIng)}
              </ul>
            </div>
            <div className='productCard-panel'>
              <div className='productCard-price'>
                {this.props.product.price} &#x20bd;
              </div>
              <button className='productCard-button btn btn-dark' 
                      onClick={this.onAddToCart}>
                {this.props.addButtonTitle || 'Add'}
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default ProductCard;