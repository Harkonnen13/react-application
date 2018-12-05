import './Styles.less';

import React from 'react';
import Base from '../../_comp-base/ComponentBase';

class Hamburger extends Base.PureComponentBase {
  
  constructor(props){
    super(props);
    this.root = React.createRef();
    this.state = {
      checked: this.props.checked === true,
      hidden: this.props.hidden === true,
      hover: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ hidden: nextProps.hidden });
  }

  onMouseOver = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  onClick = () => {
    this.setState({ checked: !this.state.checked });
    this.props.onCheckedChanged(this.state.checked);
  }

  render() {
    let checked = this.state.checked ? 'change' : '',
        hover = this.state.hover ? 'hover' : '';
    return (
      <div className={`${this.className} ${this.props.className || ''}`}
           style={this.props.style || {}} 
           onMouseOver={this.onMouseOver} 
           onMouseLeave={this.onMouseLeave}
           onClick={this.onClick}
           hidden={this.state.hidden}>
          <div className={`${this.className}-bar1 ${hover} ${checked}`}></div>
          <div className={`${this.className}-bar2 ${hover} ${checked}`}></div>
          <div className={`${this.className}-bar3 ${hover} ${checked}`}></div>
      </div>
    );
  }
}

export default Hamburger;