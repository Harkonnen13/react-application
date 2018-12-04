import React from 'react';
import Base from '../ComponentBase';

class ListBase extends Base.PureComponentBase {

  constructor(props){
    super(props);
    this.root = React.createRef();
    this.container = React.createRef();
    this.itemModificator = this.props.itemModificator || '';
  }

  renderListItem = (child) =>{
    return (
      <div className={`${this.className}-item ${this.itemModificator}`}>
        {child}
      </div>
    );
  }

  render() {
    return (
      <div ref={this.root} className={`${this.className}-wrapper`}>
        <div ref={this.container} className={`${this.className}`}>
          { this.itemModificator ? React.Children.map(this.props.children, this.renderListItem) : this.props.children}
        </div>
      </div>
    );
  }
}

export default ListBase;