import { createStore } from 'redux';
import Immutable from 'immutable';
import $ms from '../../helpers/Screens';

import ActionTypes from './ActionTypes';
import CartReducer from './Reducers/CartReducer';
import ProductReducer from './Reducers/ProductReducer';

function getWrapperClass(screen){
  return screen > $ms.screens.lg ? 'container' : '';
}

function getScreen(iw){
  iw = iw || $(document).innerWidth();
  if(iw < 768)
    return $ms.screens.sm;
  else if(iw >= 768 && iw < 992)
    return $ms.screens.md;
  else if(iw >= 992 && iw < 1200)
    return $ms.screens.lg;
  else if(iw >= 1200)
    return $ms.screens.xl;
  return $ms.screens.xl;
}

function getInitialState() {
  let doc = $(document),
      screen = getScreen(doc.innerWidth());
  return Immutable.Map({ 
    scrolled: false,
    screen: screen,
    wrapperClass: getWrapperClass(screen),

    products: ProductReducer.getInitialState(),
    cart: CartReducer.getInitialState()
  });
}

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.SCROLL:
      return state
        .update('scrolled', () => action.payload > 40);
    case ActionTypes.RESIZE:
      let screen = getScreen(action.payload.innerWidth);
      return state
        .update('screen', () => screen)
        .update('wrapperClass', () => getWrapperClass(screen));
    
    case ActionTypes.FETCH_PRODUCTS:
    case ActionTypes.RECEIVE_PRODUCTS:
      return state.update('products', ps => ProductReducer.reducer(ps, action));

    case ActionTypes.ADD_CART_ITEM:
    case ActionTypes.UPDATE_CART_ITEM:
    case ActionTypes.DELETE_CART_ITEM:
      return state.update('cart', cart => CartReducer.reducer(cart, action));
    default:
      return state;
  }
}

export default createStore(reducer, getInitialState());