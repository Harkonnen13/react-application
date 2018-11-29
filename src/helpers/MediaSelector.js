import Actions from '../logic/data/Actions';

let ms;

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
    if(ms)
      return ms;
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
ms = new MediaSelector();
export default MediaSelector;