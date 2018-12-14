import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';

import ImageBox from '../../../components/ImageBox';
import ProductTag from '../ProductTag';

const tagStyles = {
  HIT: 'badge badge-primary',
  HOT: 'badge badge-danger',
  VEG: 'badge badge-success',
  NEW: 'badge badge-dark',
};

/**
 * Product card
 */
class ProductCard extends PureComponent {

  onAddToCart = () => {
    this.props.addCartItem(this.props.product);
  }

  renderIng(ing, idx){
    return (
      <li className='productCard-ing' key={idx}>{ing}</li>
    )
  }

  renderTag(tag, idx){
    return (
      <ProductTag key={idx} 
                  className={tagStyles[tag.name]}
                  title={tag.title}>
        {tag.name}
      </ProductTag>
    )
  }

  render(){
    return (
      <div className='productCard card'>
        <div className='productCard-tags'>
          {this.props.product.tag.map(this.renderTag)}
        </div>
        <div className='productCard-body card-body'>
          <ImageBox src={this.props.product.src}/>
          <div className='productCard-title card-title'>
            {this.props.product.name}
          </div>
          <ul className='productCard-ings'>
            {this.props.product.ing.map(this.renderIng)}
          </ul>
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