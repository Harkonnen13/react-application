import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';

class ValueSelector extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value || 0,
      delta: this.props.delta || 1,
    };
  }

  componentDidUpdate(){
    if(this.props.onValueChanged)
      this.props.onValueChanged(this.state.value);
  }

  onValueChanged = (e) => {
    let newValue = +e.target.value;
    if((Number.isNaN(newValue)) ||
       (this.props.min && this.props.min > newValue) ||
       (this.props.max && this.props.max < newValue)){
        e.target.value = this.state.value;
        return;
    }
    this.setState({value: newValue});
  }

  onFocus = (e) => {
    $(e.target).select();
  }

  onMinusClick = () => {
    let newValue = this.state.value - this.state.delta;
    if(this.props.min && this.props.min > newValue)
      return;
    this.setState({value: newValue});
  }

  onPlusClick = () => {
    let newValue = this.state.value + this.state.delta;
    if(this.props.max && this.props.max < newValue)
      return;
    this.setState({value: newValue});
  }

  render() {
    return (
      <div className='valueSelector'>
        <div className='valueSelector-minus' 
             onClick={this.onMinusClick}>
             -
        </div>
        <input className='valueSelector-input' 
               type='text'
               value={this.state.value}
               onChange={this.onValueChanged}
               onFocus={this.onFocus}/>
        <div className='valueSelector-plus' 
             onClick={this.onPlusClick}>
             +
        </div>
      </div>
    );
  }
}

export default ValueSelector;