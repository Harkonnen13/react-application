import React, { PureComponent } from 'react';

/**
 * Box for rendering map
 */
class MapBox extends PureComponent {
  
  componentDidMount(){
    this.script = document.createElement('script');
    script.type = this.props.type;
    script.charset = this.props.charset;
    script.async = true;
    script.src = this.props.src;
    document.head.appendChild(script);
  }

  componentWillUnmount(){
    if(this.script){
      this.script.remove();
      this.script = null;
    }
  }

  render(){
    return (
      <div id={this.props.id}>
      </div>
    );
  }
}

export default MapBox;