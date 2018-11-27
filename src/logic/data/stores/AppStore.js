import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';
import MediaSelector from '../../../helpers/MediaSelector';

/**
 * General Store for application
 */
class AppStore extends ReduceStore {

  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    let doc = $(document);
    return Immutable.Map({ 
      scrolled: false, 
      size: { 
        innerHeigh: doc.innerHeight(), 
        innerWidth: doc.innerWidth() 
      }, 
      screen: this.getScreen(doc.innerWidth()) 
    });
  }

  getScreen(iw){
    iw = iw || $(document).innerWidth();
    if(iw < 768)
      return MediaSelector.screens.sm;
    else if(iw >= 768 && iw < 992)
      return MediaSelector.screens.md;
    else if(iw >= 992 && iw < 1200)
      return MediaSelector.screens.lg;
    else if(iw >= 1200)
      return MediaSelector.screens.xl;
    return MediaSelector.screens.xl;
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SCROLL:
        return state
          .update('scrolled', () => action.value > 40);
      case ActionTypes.RESIZE:
        return state
          .update('size', () => action.size)
          .update('screen', () => this.getScreen(action.size.innerHeigh));
      default:
        return state;
    }
  }
}

export default new AppStore();