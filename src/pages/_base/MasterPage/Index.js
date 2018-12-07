import './Styles.less';
import $con from '../../../constants';

import React from 'react';
import { Link } from 'react-router-dom';

import BasePage from '../BasePage';

import List from '../../../components/List';

import ActionTypes from '../../../logic/data/ActionTypes';

import MenuPanel from '../../../components/Menu/MenuPanel';
import PopupMenuPanel from '../../../components/Menu/PopupMenuPanel';

import Hamburger from '../../../components/Buttons/Hamburger';
import CartButton from '../../../components/Buttons/CartButton';
import LogoButton from '../../../components/Buttons/LogoButton';
import NavigationButton from '../../../components/Buttons/NavigationButton';

import TwitterButton from '../../../components/Buttons/TwitterButton';
import FacebookButton from '../../../components/Buttons/FacebookButton';
import VkButton from '../../../components/Buttons/VkButton';
import InstagramButton from '../../../components/Buttons/InstagramButton';
import YoutubeButton from '../../../components/Buttons/YoutubeButton';
import LangPicker from '../../../components/LangPicker.js/Index';

/**
 * Master page for application, 
 * contains rendering of footer and header
 */
class MasterPage extends BasePage {

  constructor(props){
    super(props);
    console.log(props);
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

  onEnClick = () => this.props.changeLang($con.lang.en);

  onRuClick = () => this.props.changeLang($con.lang.ru);

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
            <NavigationButton href='/' height='60px' width='36px'/>
            <CartButton href='/cart' height='60px' width='46px'/>
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
          <div className='masterPage-col col-xs-12 col-sm-3 col-md-3 col-lg-3'>
            <List itemModificator='masterPage-item'
                  orientation={List.orientations.column}>
              <Link className='link' to='/about/'> 
                {this.props.localization.links.about}
              </Link>
              <Link className='link' to='/'>
                {this.props.localization.links.feedback}
              </Link>
              <Link className='link' to='/'>
                {this.props.localization.links.qna}
              </Link>
              <Link className='link' to='/'>
                {this.props.localization.links.delivery}
              </Link>
            </List>
          </div>

          <div className='masterPage-col col-xs-12 col-sm-4 col-md-4 col-lg-4'>
            <List itemModificator='masterPage-item'
                  orientation={List.orientations.column}>
              <Link className='link' to='/'>
                {this.props.localization.links.payment}
              </Link>
              <Link className='link' to='/'>
                {this.props.localization.links.promotions}
              </Link>
              <Link className='link' to='/'>
                {this.props.localization.links.productInfo}
              </Link>
            </List>
          </div>

          <div className='masterPage-col col-xs-12 col-sm-5 col-md-5 col-lg-5'>
            <List className='masterPage-socials'
                  itemModificator='masterPage-item masterPage-social'>
              <TwitterButton 
                  href='https://twitter.com/?lang=ru'
                  target='_blank'
                  width='30px'
                  height='30px'/>
              <FacebookButton 
                  href='https://ru-ru.facebook.com/'
                  target='_blank'
                  width='30px'
                  height='30px'/>
              <VkButton 
                  href='https://vk.com/'
                  target='_blank'
                  width='30px'
                  height='30px'/>
              <InstagramButton 
                  href='https://www.instagram.com/?hl=ru'
                  target='_blank'
                  width='30px'
                  height='30px'/>
              <YoutubeButton 
                  href='https://www.youtube.com/?gl=RU'
                  target='_blank'
                  width='30px'
                  height='30px'/>
            </List>
            <div className='masterPage-copyrates'>
              <p>{this.props.localization.copyrates.title}</p>
              <p>{this.props.localization.copyrates.rules}</p>
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