import './Styles.less';
import 'bootstrap/dist/css/bootstrap.css';
import $con from '../../../constants';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import List from '../../List';

class PopupMenuPanel extends PureComponent {
  
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ 
      isOpen: nextProps.isOpen, 
      hidden: nextProps.hidden 
    });
  }

  render(){
    const hidden = !this.state.isOpen || this.state.hidden 
      ? 'popupMenuPanel-hide' 
      : '';
    return (
      <div className={`popupMenuPanel ${hidden}`}>
        { 
          this.props.screen < $con.screenSize.md &&  
            <span className='menu-phone'>
              8 (800) 960-01-01
            </span>
        }
        <List className='popupMenuPanel-list' 
              itemModificator='popupMenuPanel-item col-sm-12 col-md-auto'>
          <Link className='link' to='/pizza/'>Пицца</Link>
          <Link className='link' to='/pasta/'>Паста</Link>
          <Link className='link' to='/salad/'>Салаты</Link>
          <Link className='link' to='/drinks/'>Напитки</Link>
        </List>
      </div>
    )
  }
}

export default PopupMenuPanel;