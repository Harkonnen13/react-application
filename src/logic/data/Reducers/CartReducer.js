import ActionTypes from '../ActionTypes';

const key = 'lp-cart';

/**
 * Get cart data from sessionStorage (or create new one)
 */
function getCart() {
  let newCart = {};
  try{
      let cart = JSON.parse(window.sessionStorage.getItem(key));
      if(!cart){
          cart = newCart;
          setCart(cart);
      }
      return cart;  
  }
  catch{
      setCart(newCart);
      return newCart; 
  }
}

/**
 * Set cart data to sessionStorage
 */
function setCart(cart) {
  window.sessionStorage.setItem(key, JSON.stringify(cart));
}

/**
 * Reducer for cart data (using sessionStorage)
 * @param {*} state 
 * @param {{type, payload}} action 
 */
function reducer(state, action) {
  switch (action.type) {
      
    case ActionTypes.ADD_CART_ITEM:
      if(state[action.payload.id])
        state[action.payload.id].count++;
      else
        state[action.payload.id] = { data: action.payload, count: 1 };
      setCart(state);
      return getCart();

    case ActionTypes.DELETE_CART_ITEM:
      if(state[action.payload.id])
        delete state[action.payload.id];
      setCart(state);
      return getCart();

    case ActionTypes.UPDATE_CART_ITEM:
      state[action.payload.item.id].count = action.payload.count;
      setCart(state);
      return getCart();

    default:
      return state;
  }
}

export default { reducer, getInitialState: getCart };