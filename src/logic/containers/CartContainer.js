import React, { Component } from 'react';
import {Container} from 'flux/utils';

import Actions from '../data/Actions';
import CartStore from '../data/stores/CartStore';
import AppStore from '../data/stores/AppStore';
import CartPage from '../../pages/CartPage';

class CartContainer extends Component{

    static getStores() {
      return [
        AppStore,
        CartStore
      ];
    }
     
    static calculateState(prevState, props) {
      let aState = AppStore.getState(),
          state = {
              scrolled: aState.get('scrolled'),
              screen: aState.get('screen'),
              size: aState.get('size'),
              wrapperClass: aState.get('wrapperClass'),

              cart: CartStore.getState(),
              updateCartItem: Actions.updateCartItem,
              deleteCartItem: Actions.deleteCartItem
          };
      return state;
    }

    render() {
      return (
        <CartPage {...this.state}></CartPage>
      );
    }
}
export default Container.create(CartContainer, { withProps: true });