import './Styles.less';

import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';

import List from '../../../components/List';
import Menu from '../../../components/Menu';

import TwitterButton from '../../../components/Buttons/TwitterButton';
import FacebookButton from '../../../components/Buttons/FacebookButton';
import VkButton from '../../../components/Buttons/VkButton';
import InstagramButton from '../../../components/Buttons/InstagramButton';
import YoutubeButton from '../../../components/Buttons/YoutubeButton';

/**
 * Master page for application, 
 * contains rendering of footer and header
 */
class MasterPage extends BasePage {

  renderHeader = () => {
    return (
      <header className='masterPage-header'>
        <div className='masterPage-wrapper'>
          <div className={this.props.wrapperClass}>
            <Menu {...this.props}/>
          </div>
        </div>
      </header>
    );
  }

  renderFooter = () => {
    return (
      <footer className='masterPage-footer'>
        <div className={`masterPage-menu ${this.props.wrapperClass}`}>
          <div className='masterPage-col col-xs-12 col-sm-3 col-md-3 col-lg-3'>
            <List itemModificator='masterPage-item'
                orientation={List.orientations.column}>
              <Link className='link' to='/about/'>О компании</Link>
              <Link className='link' to='/'>Оставить отзыв</Link>
              <Link className='link' to='/'>Вопросы-ответы</Link>
              <Link className='link' to='/'>Условия доставки</Link>
            </List>
          </div>

          <div className='masterPage-col col-xs-12 col-sm-4 col-md-4col-lg-4'>
            <List itemModificator='masterPage-item'
                  orientation={List.orientations.column}>
              <Link className='link' to='/'>Оплата</Link>
              <Link className='link' to='/'>Акции</Link>
              <Link className='link' to='/'>Информация о продукции</Link>
            </List>
          </div>

          <div className='masterPage-col col-xs-12 col-sm-5 col-md-5 col-lg-5'>
            <List className='masterPage-links'
                  itemModificator='masterPage-item'>
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
              <p>© 2006-2018 Logo Pizza.</p>
              <p>Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default MasterPage;