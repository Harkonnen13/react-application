import EventEmitter from 'events';

let instance;

class ScrollWatcher extends EventEmitter {

    static get instance(){
        return instance || (instance = new ScrollWatcher());
    }

    static get events() { 
        return {
            scrollChanged: 'scrollChanged'
        }; 
    }

    constructor(){
      super();
      if(instance)
        return instance;
        
      this._scrolled = false;
      $(document).ready(() => {
        $(window).scroll(this.onScroll);
      });
      instance = this;
    }

    get scrolled() { 
        return this._scrolled;
    }

    onScroll = (e) =>{
        let computed = e.target.scrollingElement.scrollTop > 40;
        if(this._scrolled !== computed){
            this._scrolled = computed;
            this.emit(ScrollWatcher.events.scrollChanged, this._scrolled);
        }
    }
}

export default ScrollWatcher;