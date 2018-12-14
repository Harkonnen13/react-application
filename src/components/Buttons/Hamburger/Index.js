import './Styles.less';

import React from 'react';
import Base from '../../_comp-base/ComponentBase';

/**
 * Hamburger button
 */
class Hamburger extends Base.PureComponentBase {
  
  constructor(props){
    super(props);
    this.root = React.createRef();
    this.state = {
      hover: false
    };
  }

  onMouseOver = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  onClick = () => {
    if(this.props.onCheckedChanged)
      this.props.onCheckedChanged();
  }

  render() {
    let checked = this.props.checked ? 'change' : '',
        hover = this.state.hover ? 'hover' : '';
    return (
      <div className={`${this.className} ${this.props.className || ''}`}
           style={this.props.style || {}} 
           onMouseOver={this.onMouseOver} 
           onMouseLeave={this.onMouseLeave}
           onClick={this.onClick}
           hidden={this.props.hidden}>
          <div className={`${this.className}-bar1 ${hover} ${checked}`}></div>
          <div className={`${this.className}-bar2 ${hover} ${checked}`}></div>
          <div className={`${this.className}-bar3 ${hover} ${checked}`}></div>
      </div>
    );
  }
}

export default Hamburger;