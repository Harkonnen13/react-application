import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';

/**
 * Store for products
 */
class ProductsStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.Map({ loaded: false, products: [] });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.FETCH_PRODUCTS:
        return state
            .update('loaded', () => false)
            .update('products', () => []);
      case ActionTypes.RECEIVE_PRODUCTS:
        return state
            .update('loaded', () => true)
            .update('products', () => action.list);
      default:
        return state;
    }
  }
}

export default new ProductsStore();