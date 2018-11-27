import React, { Component } from 'react';
import {Container} from 'flux/utils';

import ProductsPage from '../../pages/ProductsPage';

import AppStore from '../data/stores/AppStore';
import ProductsStore from '../data/stores/ProductsStore';
import Actions from '../data/Actions';

class ProductsContainer extends Component{

  static getStores() {
    return [
      AppStore,
      ProductsStore,
    ];
  }
  
  static calculateState(prevState, props) {
    let aState = AppStore.getState(),
        pState = ProductsStore.getState(),
        state = {
          href: props.href,
          title: props.title,
          list: pState.get('products'),
          loaded: pState.get('loaded'), 
          scrolled: aState.get('scrolled'),
          screen: aState.get('screen'),
          size: aState.get('size'),

          fetchProducts: Actions.fetchProducts,
          addCartItem: Actions.addCartItem
        };
    return state;
  } 
  render() {
      return (
        <ProductsPage {...this.state}/>
      );
  }
}
export default Container.create(ProductsContainer, { withProps: true });