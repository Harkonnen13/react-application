import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import { connect } from 'react-redux';
import MasterPage from '../_base/MasterPage';

class LandingPage extends MasterPage {

  //#region Render methods

  renderContent = () => {
    return (
      <div className='landingPage'>
        <div className='landingPage-body'>
          <div className='landingPage-intro'>
            <div className='landingPage-info'>
              <div className='landingPage-title'>
                <span className='font-weight-bold'>Pizza Logo</span> — мы делаем пиццу более 12 лет, постоянно следим за её качеством и придумываем новые оригинальные рецепты!
              </div>
              <ul>
                <li>Специальные рецепты от шеф-повара!</li>
                <li>Акции и праздничные скидки!</li>
                <li>Контроль качества и отличный сервис!</li>
              </ul>
            </div>
          </div>
          <div className='landingPage-text'>
            <div className='container'>
        	    <div className='h2'>Доставка пиццы по городу Москве.</div>
        		  <p>Делаем пиццу более 12 лет, постоянно следим за её качеством и придумываем новые оригинальные рецепты. В нашем меню 27 видов   пиццы, и мы не собираемся останавливаться!</p>
              <p>Используем только самые свежие продукты от поставщиков, которым доверяем. В нашей пицце и других блюдах нет размороженных полуфабрикатов.
              </p>
              </div>
            </div>
        </div>
      </div>
    );
  };

  //#endregion Render methods
}

function mapStateToProps(state){
  return {
    scrolled: state.get('scrolled'),
    screen: state.get('screen'),
    wrapperClass: state.get('wrapperClass')
  };
}

export default connect(mapStateToProps)(LandingPage);
