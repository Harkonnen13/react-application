import {ReduceStore} from 'flux/utils';
import ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';

/**
 * Store for cart items, using sessionStorage
 */
class CartStore extends ReduceStore {

  constructor() {
    super(Dispatcher);
  }

  getCart() {
    let newCart = {};
    try{
        let cart = JSON.parse(window.sessionStorage.getItem('lp-cart'));
        if(!cart){
            cart = newCart;
            this.setCart(cart);
        }
        return cart;  
    }
    catch{
        this.setCart(newCart);
        return newCart; 
    }
  }
  
  setCart(cart) {
      window.sessionStorage.setItem('lp-cart', JSON.stringify(cart));
  }

  getInitialState() {
    return this.getCart();
  }

  reduce(state, action) {
    switch (action.type) {
        
      case ActionTypes.ADD_CART_ITEM:
        if(state[action.item.id])
            state[action.item.id].count++;
        else
            state[action.item.id] = { data: action.item, count: 1 };
        this.setCart(state);
        return this.getCart();

      case ActionTypes.DELETE_CART_ITEM:
        if(state[action.item.id])
          delete state[action.item.id];
        this.setCart(state);
        return this.getCart();

      case ActionTypes.UPDATE_CART_ITEM:
        state[action.item.id].count = action.count;
        this.setCart(state);
        return this.getCart();

      default:
        return state;
    }
  }
}

export default new CartStore();