import Actions from '../logic/data/Actions';

let sw;

class ScrollWatcher {

    constructor(){
      if(sw)
        return sw;
      $(document).ready(() => {
        $(window).scroll(this.onScroll);
      });
    }

    onScroll(e){
      if(e.target.scrollingElement)
        Actions.scroll(e.target.scrollingElement.scrollTop);
    }
}
sw = new ScrollWatcher();
export default ScrollWatcher;