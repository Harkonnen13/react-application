
import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $con from '../../constants';

import MenuPanel from './MenuPanel';
import PopupMenuPanel from './PopupMenuPanel';
import List from '../List';
import Hamburger from '../Buttons/Hamburger';
import CartButton from '../Buttons/CartButton';
import LogoButton from '../Buttons/LogoButton';
import NavigationButton from '../Buttons/NavigationButton';

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = { 
      showButton: this.getShowButton(props),
      menuOpen: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ 
      showButton: this.getShowButton(nextProps)
    });
  }

  render() {
    let scrolled = (this.props.scrolled || this.props.screen <          $con.screenSize.xl) ? '' : 'no-scroll';
    return (
      <div>
        <List className='menu'
              itemModificator='menu-item'>
          <Hamburger hidden={!this.state.showButton}
                     checked={this.state.menuOpen}
                     onCheckedChanged={this.onButtonClick}/>
          <LogoButton className={`menu-logo ${scrolled}`}/>
          <MenuPanel screen={this.props.screen} show={this.state.showButton}/>
          <NavigationButton href='/' height='60px' width='40px'/>
          <CartButton href='/cart' height='60px' width='50px'/>
        </List>
        <PopupMenuPanel isOpen={this.state.menuOpen} 
                        hidden={!this.state.showButton} 
                        screen={this.props.screen}/>
      </div>
    );
  }

  //#endregion Render methods

  getShowButton(props){
    switch(props.screen){
      case $con.screenSize.xs:
      case $con.screenSize.sm:
      case $con.screenSize.md:
      case $con.screenSize.lg:
        return true;

      default:
        return props.scrolled;
    }
  }

  //#endregion Get methods

  //#region Event handlers

  onButtonClick = () => this.setState({ menuOpen: !this.state.menuOpen });

  //#endregion Event handlers
}

export default Menu;