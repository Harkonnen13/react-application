import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { Component } from 'react';

class Hamburger extends Component {
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
      <div className='hamburger' 
           onMouseOver={this.onMouseOver} 
           onMouseLeave={this.onMouseLeave}
           onClick={this.onClick}>
          <div className={`hamburger-bar1 ${hover} ${checked}`}></div>
          <div className={`hamburger-bar2 ${hover} ${checked}`}></div>
          <div className={`hamburger-bar3 ${hover} ${checked}`}></div>
      </div>
    );
  }
}

export default Hamburger;