import React from 'react';
import Base from '../ComponentBase/Index.js';

class ListBase extends Base.PureComponentBase {

  static get orientations(){
    return {
      row: 0,
      column: 1
    };
  }

  constructor(props){
    super(props);
    this.root = React.createRef();
    this.container = React.createRef();
  }

  renderListItem = (child) =>{
    return (
      <div className={`${this.className}__item ${this.props.itemModificator}`}>
        {child}
      </div>
    );
  }

  getOrientationClass = (orientation = ListBase.orientations.row) => {
    switch(orientation){
      case ListBase.orientations.row:
        return `${this.className}__container_orientation_row`;
      case ListBase.orientations.column:
        return `${this.className}__container_orientation_column`;
    }
  }

  render() {
    const orientation = this.getOrientationClass(this.props.orientation);
    return (
      <div ref={this.root} 
           className={`${this.className} ${this.props.className || ''}`}
           style={this.props.style}>
        <div ref={this.container} 
             className={`${this.className}__container ${orientation}`}>
          { 
            this.props.itemModificator 
              ? React.Children.map(this.props.children, this.renderListItem) 
              : this.props.children
          }
        </div>
      </div>
    );
  }
}

export default ListBase;