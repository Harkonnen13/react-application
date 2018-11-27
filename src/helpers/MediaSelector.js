import Actions from '../logic/data/Actions';

class MediaSelector {

  static get screens() { 
    return {
      sm: 0,
      md: 1,
      lg: 2,
      xl: 3
    }; 
  }

  constructor(){
    $(document).ready(() => {
      $(window).resize(this.onResize);
    });
  }

  onResize(e){
    Actions.resize({ 
      innerHeight: e.currentTarget.innerHeight, 
      innerWidth: e.currentTarget.innerWidth 
    });
  }
}
var ms = new MediaSelector();
export default MediaSelector;