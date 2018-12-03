import ActionTypes from '../ActionTypes';

function getCart() {
  let newCart = {};
  try{
      let cart = JSON.parse(window.sessionStorage.getItem('lp-cart'));
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

function setCart(cart) {
  window.sessionStorage.setItem('lp-cart', JSON.stringify(cart));
}

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