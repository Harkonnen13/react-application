import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

/**
 * All dispatched actions for application
 */
const Actions = {

  /**
   * Fetch products 
   * @param {*} href 
   */
  fetchProducts(href) {
    Dispatcher.dispatch({ 
      type: ActionTypes.FETCH_PRODUCTS 
    });

    $.getJSON(href).done(res => {
        Dispatcher.dispatch({ 
            type: ActionTypes.RECEIVE_PRODUCTS, 
            list: res 
        });
    });
  },

  /**
   * Add product to cart
   * @param {*} product 
   */
  addCartItem(product){
    Dispatcher.dispatch({ 
      type: ActionTypes.ADD_CART_ITEM, 
      item: product 
    });
  },

  /**
   * Delete product from cart
   */
  deleteCartItem(product){
    Dispatcher.dispatch({ 
      type: ActionTypes.DELETE_CART_ITEM, 
      item: product 
    });
  },

  /**
   * Update product in cart
   * @param {*} product 
   * @param {*} count 
   */
  updateCartItem(product, count){
    Dispatcher.dispatch({ 
      type: ActionTypes.UPDATE_CART_ITEM, 
      item: product,
      count: count
    });
  },

  /**
   * Page scroll
   * @param {*} value 
   */
  scroll(value){
    Dispatcher.dispatch({ 
      type: ActionTypes.SCROLL, 
      value: value
    });
  },

  /**
   * Page resize
   * @param {*} size 
   */
  resize(size){
    Dispatcher.dispatch({ 
      type: ActionTypes.RESIZE,
      size: size
    });
  }
};

export default Actions;