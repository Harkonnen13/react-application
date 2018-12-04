
import ActionTypes from '../ActionTypes';

function getInitialState(){
  return { 
    loaded: false, 
    list: [] 
  };
}

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { loaded: false, list: [] };
    case ActionTypes.RECEIVE_PRODUCTS:
      return { loaded: true, list: action.payload };
    default:
      return state;
  }
}

export default { reducer, getInitialState };