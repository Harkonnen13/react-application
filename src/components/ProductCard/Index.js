import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import CardBase from '../_comp-base/CardBase';
import Tag from '../Tag/Index';
import ImageBox from '../ImageBox';

class ProductCard extends CardBase {
  constructor(props){
    super(props);
    this.id = 'productCard-' + this.props.product.id;
  }

  onAddToCart = () => {
    this.props.addCartItem(this.props.product);
  }

  getColumns = () =>{
    return 'col-12 col-sm-6 col-md-6 col-lg-4';
  }

  renderCard = () => {
    const ings = this.props.product.ing.map(i => <li className='productCard-ing' key={i}>{i}</li>);
    const tags = 
      this.props.product.tag.map(i => <Tag key={i} name={i}></Tag>);
    return (
      <div className='productCard card'>
          <div className='productCard-tags'>
            {tags}
          </div>
          <div className='productCard-body card-body'>
            <ImageBox src={this.props.product.src}></ImageBox>
            <div className='productCard-title card-title'>
              {this.props.product.name}
            </div>
            <div className='flex-grow-1'>
              <ul className='productCard-ings'>
                {ings}
              </ul>
            </div>
            <div className='productCard-panel'>
                <div className='productCard-price'>
                  {this.props.product.price} &#x20bd;
                </div>
                <button className='productCard-button btn btn-dark' 
                        onClick={this.onAddToCart}>
                        В корзину
                </button>
            </div>
          </div>
        </div>
    );
  }
}

export default ProductCard;