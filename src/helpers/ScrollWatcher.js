import Actions from '../logic/data/Actions';

class ScrollWatcher {

    constructor(){
      $(document).ready(() => {
        $(window).scroll(this.onScroll);
      });
    }

    onScroll(e){
      if(e.target.scrollingElement)
        Actions.scroll(e.target.scrollingElement.scrollTop);
    }
}
var sw = new ScrollWatcher();
export default ScrollWatcher;