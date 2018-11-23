import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends PureComponent {

  static get orientations() {
    return { 
      row: 'row', 
      column: 'column' 
    };
  }

  constructor(props){
    super(props);
    this.state = {
      orientation: this.props.orientation || Navigation.orientations.row
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ orientation: nextProps.orientation });
  }

  getOrientationClass = () => {
    switch(this.state.orientation){
      case Navigation.orientations.row:
        return 'flex-row';
      case Navigation.orientations.column:
        return 'flex-column';
      default:
        return '';
    }
  }

  renderLink(l){
    return (
      <div className='navigation-item' key={l.title}>
        <Link className='link' to={l.to}>{l.title}</Link>
      </div>
    );
  }

  render() {
    let links = this.props.list.map(l => this.renderLink(l));
    return (
      <div className={`navigation d-flex ${this.getOrientationClass()}`}>
        {links}
      </div>
    );
  }
}

export default Navigation;