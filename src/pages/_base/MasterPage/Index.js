import './Styles.less';
import $con from '../../../constants';

import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';

import List from '../../../components/List';

import ActionTypes from '../../../logic/data/ActionTypes';

import MenuPanel from '../../../components/Menu/MenuPanel';
import PopupMenuPanel from '../../../components/Menu/PopupMenuPanel';

import Hamburger from '../../../components/buttons/Hamburger';
import CartButton from '../../../components/buttons/CartButton';
import LogoButton from '../../../components/buttons/LogoButton';
import NavigationButton from '../../../components/buttons/NavigationButton';

import TwitterButton from '../../../components/buttons/social/TwitterButton';
import FacebookButton from '../../../components/buttons/social/FacebookButton';
import VkButton from '../../../components/buttons/social/VkButton';
import InstButton from '../../../components/buttons/social/InstagramButton';
import YoutubeButton from '../../../components/buttons/social/YoutubeButton';
import LangPicker from '../../../components/LangPicker.js';

/**
 * Master page for application, 
 * contains rendering of footer and header
 */
class MasterPage extends BasePage {

  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  get showButton(){
    switch(this.props.screen){
      case $con.screenSize.xs:
      case $con.screenSize.sm:
      case $con.screenSize.md:
      case $con.screenSize.lg:
        return true;

      default:
        return this.props.scrolled;
    }
  }

  get showPhone(){
    return this.props.screen >= $con.screenSize.md;
  }

  get showMenu(){
    return this.props.screen >= $con.screenSize.xl && !this.props.scrolled;
  }

  onButtonClick = () => this.setState({ menuOpen: !this.state.menuOpen });
  
  renderHeader = () => {
    const headerScroll = this.props.scrolled 
      ? 'masterPage-h-scroll' 
      : 'masterPage-h-no-scroll';
    const logoScroll = this.props.scrolled 
      ? 'masterPage-logo-scroll' 
      : 'masterPage-logo-no-scroll';

    return (
      <header className='masterPage-header'>
        <div className={`masterPage-h-wrapper ${headerScroll}`}>
          <div className={`masterPage-menu ${this.props.wrapperClass}`}>
          <List className='masterPage-menu-list'
                itemModificator='masterPage-menu-item'>
            <Hamburger hidden={!this.showButton}
                       checked={this.state.menuOpen}
                       onCheckedChanged={this.onButtonClick}/>
            <LogoButton className={`masterPage-logo ${logoScroll}`}/>
            <MenuPanel showPhone={this.showPhone} 
                       showMenu={this.showMenu}>
              <List itemModificator='menuPanel-link'>
                <Link className='link' to='/pizza/'>
                  {this.props.localization.links.pizza}
                </Link>
                <Link className='link' to='/pasta/'>
                  {this.props.localization.links.pasta}
                </Link>
                <Link className='link' to='/salad/'>
                  {this.props.localization.links.salad}
                </Link>
                <Link className='link' to='/drinks/'>
                  {this.props.localization.links.drinks}
                </Link>
              </List>
            </MenuPanel>
            <LangPicker change={this.props.changeLang}
                        selected={this.props.lang}
                        list={this.props.localization.getAvailableLanguages()}/>
            <NavigationButton className='main-svg' href='/' height={60} 
                              width={36}/>
            <CartButton className='main-svg' href='/cart' height={60} 
                        width={46}/>
          </List> 
          </div>
          <PopupMenuPanel isOpen={this.state.menuOpen && this.showButton}
                          showPhone={!this.showPhone}>
            <List className='popupMenuPanel-list' 
                  itemModificator='popupMenuPanel-item col-sm-12 col-md-auto'>
              <Link className='link' to='/pizza/'>
                {this.props.localization.links.pizza}
              </Link>
              <Link className='link' to='/pasta/'>
                {this.props.localization.links.pasta}
              </Link>
              <Link className='link' to='/salad/'>
                {this.props.localization.links.salad}
              </Link>
              <Link className='link' to='/drinks/'>
                {this.props.localization.links.drinks}
              </Link>
            </List>
          </PopupMenuPanel>
        </div>
      </header>
    );
  }

  renderFooter = () => {
    return (
      <footer className='masterPage-footer'>
        <div className={`masterPage-f-wrapper ${this.props.wrapperClass}`}>
          <div className='masterPage-col col-6 col-sm-3'>
            <List itemModificator='masterPage-f-item'
                  orientation={List.orientations.column}>
              <Link className='s-link' to='/about/'> 
                {this.props.localization.links.about}
              </Link>
              <Link className='s-link' to='/'>
                {this.props.localization.links.feedback}
              </Link>
              <Link className='s-link' to='/'>
                {this.props.localization.links.qna}
              </Link>
              <Link className='s-link' to='/'>
                {this.props.localization.links.contacts}
              </Link>
            </List>
          </div>

          <div className='masterPage-col col-6 col-sm-3'>
            <List itemModificator='masterPage-f-item'
                  orientation={List.orientations.column}>
              <Link className='s-link' to='/'>
                {this.props.localization.links.productInfo}
              </Link>
              <Link className='s-link' to='/'>
                {this.props.localization.links.payment}
              </Link>
              <Link className='s-link' to='/'>
                {this.props.localization.links.promotions}
              </Link>
              <Link className='s-link' to='/'>
                {this.props.localization.links.delivery}
              </Link>
            </List>
          </div>

          <div className='masterPage-col col-12 col-sm-6'>
            <List className='masterPage-socials'
                  itemModificator='masterPage-f-social'>
              <FacebookButton 
                  className='main-svg masterPage-facebook'
                  href='https://ru-ru.facebook.com/'
                  target='_blank'
                  width={28}
                  height={28}/>
              <TwitterButton 
                  className='main-svg masterPage-twitter'
                  href='https://twitter.com/?lang=ru'
                  target='_blank'
                  width={28}
                  height={28}/>
              <VkButton 
                  className='main-svg masterPage-vk'
                  href='https://vk.com/'
                  target='_blank'
                  width={28}
                  height={28}/>
              <InstButton 
                  className='main-svg masterPage-instagram'
                  href='https://www.instagram.com/?hl=ru'
                  target='_blank'
                  width={28}
                  height={28}/>
              <YoutubeButton 
                  className='main-svg masterPage-youtube'
                  href='https://www.youtube.com/?gl=RU'
                  target='_blank'
                  width={28}
                  height={28}/>
            </List>
            <div className='masterPage-copyrates'>
              <div className='masterPage-copyrates-line'>
              {this.props.localization.copyrates.title}        
              </div>
              <div className='masterPage-copyrates-line'>    {this.props.localization.copyrates.rules}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

/**
 * Map common state to props
 */
function mapCommonProps(props, state){
  const lc = state.get('local');
  props.lang = lc.get('lang');
  props.localization = lc.get('localization');
  props.scrolled = state.get('scrolled');
  props.screen = state.get('screen');
  props.wrapperClass = state.get('wrapperClass');
  return props;
}

/**
 * Map common dispatch methods to props
 */
function mapCommonDispatch(props, dispatch){
  props.changeLang = lang => {
    dispatch({ 
      type: ActionTypes.LANG_CHANGED, 
      payload: lang 
    });
  };
  return props;
}

export { mapCommonProps, mapCommonDispatch }
export default MasterPage;