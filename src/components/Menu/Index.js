
import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { Component } from 'react';

import $con from '../../constants';

import Navigation from '../Navigation';
import Hamburger from '../Hamburger';

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = { 
      showButton: this.getShowButton(props),
      menuOrientation: this.getOrientation(props),
      menuOpen: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({ 
      showButton: this.getShowButton(nextProps),
      menuOrientation: this.getOrientation(nextProps)
    });
  }

  render() {
    let hide = this.state.showButton ? '' : 'hide',
        scrolled = (this.props.scrolled || this.props.screen < $con.screenSize.xl) ?''  : 'no-scroll';
    return (
      <div>
        <div className='menu'>
          <div className={`menu-item ${hide}`}>
            <Hamburger
                  hidden={!this.state.showButton}
                  checked={this.state.menuOpen}
                  onCheckedChanged={this.onButtonClick.bind(this)}>
            </Hamburger>
          </div>
          <div className={`menu-item ${scrolled}`}>
            <a href='/' className={`menu-logo ${scrolled}`}/>
          </div>
          <div className='menu-item'>
            <div className='col-12 font-weight-bold'>
            {
              this.props.screen >= $con.screenSize.md &&
                <span className='menu-phone'>8 (800) 960-01-01</span>
            }
            </div>
            {
                !this.state.showButton && 
                <div className='col-12'>
                  <Navigation orientation={this.state.menuOrientation}
                              list={this.getMenuItems()}>
                  </Navigation>
                </div>
            }
          </div>
          
          <div className='menu-item'>
            <a href='/'>
              <svg xmlns='http://www.w3.org/2000/svg' width='40px' height='60px'    viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0    3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984    2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21  8   16.398 4.531-7.188 8-12.2 8-16.398   0-4.199-3.801-7.602-8-7.602zm0   11c-1.657 0-3-1.343-3-3s1.343-3  3-3 3 1.343 3 3-1.343 3-3 3z'/></svg>
            </a>
          </div>
          <div className='menu-item'>
            <a href='/cart'>
              <svg xmlns='http://www.w3.org/2000/svg' width='50px' height='60px'    viewBox='0 0 24 24'><path d='M19.029 13h2.971l-.266   1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576     2h4.387l.297-1h-4.396l-.288 1zm2.684-9l-.743 2h-1.929l-3.474    12h-11.239l-4.615-11h14.812l-.564 2h-11.24l2.938    7h8.428l3.432-12h4.194zm-14.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672    1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm5.9-7-.9   7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671    1.5-1.5c0-.828-.672-1.5-1.5-1.5z'/></svg>
            </a>
          </div>
        </div>
        <div className={
          'menu-popup-menu' + (this.state.menuOpen &&this.state.showButton ? '' : ' hide')}>
          {
              this.props.screen < $con.screenSize.md &&
              <span>8 (800) 960-01-01</span>
          }
          {
            this.state.showButton && 
            <Navigation orientation={this.state.menuOrientation}
                        list={this.getMenuItems()}>
            </Navigation>
          }
         </div>
      </div>
    );
  }

  //#endregion Render methods

  getMenuItems(){
    return [
      { title: 'Пицца', to: '/pizza/' },
      { title: 'Паста', to: '/pasta/' },
      { title: 'Салаты', to: '/salad/'},
      { title: 'Напитки', to: '/drinks/'}
    ]
  }

  getShowButton(props){
    switch(props.screen){
      case $con.screenSize.sm:
      case $con.screenSize.md:
      case $con.screenSize.lg:
        return true;

      default:
        return props.scrolled;
    }
  }

  getOrientation(props) {
    switch(props.screen){
      case $con.screenSize.sm:
        return Navigation.orientations.column;
      default:
        return Navigation.orientations.row;
    }
  }

  //#endregion Get methods

  //#region Event handlers

  onButtonClick = () => this.setState({ menuOpen: !this.state.menuOpen });

  //#endregion Event handlers
}

export default Menu;