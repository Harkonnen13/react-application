
import ActionTypes from '../ActionTypes';
import Immutable from 'immutable';

/**
 * Get initial product data
 */
function getInitialState(){
  return Immutable.Map({ 
    downloaded: false, 
    list: [] 
  });
}

/**
 * Reducer for product data
 * @param {Immutable} state 
 * @param {{type, payload}} action 
 */
function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.CLEAR_PRODUCTS:
      return state
        .update('downloaded', () => false)
        .update('list', l => l.length === 0 ? l : []);
    case ActionTypes.RECEIVE_PRODUCTS:
      return state
        .update('downloaded', () => true)
        .update('list', () => action.payload);
    default:
      return state;
  }
}

export default { reducer, getInitialState };