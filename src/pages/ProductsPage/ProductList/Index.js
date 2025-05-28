import './Styles.less';

import React, { Component } from 'react';

import List from '../../../components/List/Index.js';
import Spinner from '../../../components/Spinner/Index.js';
import ProductCard from '../ProductCard/Index.js';

/**
 * Product list
 */
class ProductList extends Component {
  
  renderProduct = p => {
    return(
      <ProductCard product={p} 
                   key={p.id}
                   addButtonTitle={this.props.localization.buttons.toCart}
                   addCartItem={this.props.addCartItem}/>
    );
  }

  //#region Render methods

  render(){
    return (
      <div className='productList'>
        <List justifyContent 
              className='productList-list'
              itemModificator='productList-card col-12 col-sm-6 col-md-6 col-lg-4'>
          {this.props.list.map(this.renderProduct)}
        </List>
        <Spinner hide={this.props.downloaded}/>
      </div>
    );
  };

  //#endregion Render methods
}

export default ProductList;