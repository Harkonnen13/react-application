import EventEmitter from 'events';

let instance;

class MediaSelector extends EventEmitter {

    static get instance(){
        return instance || (instance = new MediaSelector());
    }

    static get events() { 
        return {
            screenChanged: 'screenChanged',
            sizeChanged: 'sizeChanged'
        }; 
    }

    static get screens() { 
        return {
            sm: 0,
            md: 1,
            lg: 2,
            xl: 3
        }; 
    }

    constructor(){
      super();
      if(instance)
        return instance;
      this._size = { innerHeight: 0, innerWidth: 0 };
      this._screen = this.getScreen();

      $(document).ready(() => {
        $(window).resize(this.onResize.bind(this));
      });
      instance = this;
    }

    get screen() { 
        return this._screen;
    }

    get screenHeight() { 
        return this._size.innerHeight;
    }

    get screenWidth() { 
        return this._size.innerWidth;
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

    onResize(e){
        this._size = { 
            innerHeight: e.currentTarget.innerHeight, 
            innerWidth: e.currentTarget.innerWidth 
        };
        this.emit(MediaSelector.events.sizeChanged, 
            Object.assign({}, this._size));

        var computed = this.getScreen(this.innerWidth);
        if(this._screen !== computed){
            this._screen = computed;
            this.emit(MediaSelector.events.screenChanged, this._screen);
        }
    }
}

export default MediaSelector;