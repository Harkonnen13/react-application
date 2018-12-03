import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import { connect } from 'react-redux';

import MasterPage from '../_base/MasterPage';

class AboutPage extends MasterPage {

  //#region Render methods

  renderContent = () => {
    return (
      <div className='aboutPage'>
        <div className={`aboutPage-body ${this.props.wrapperClass}`}>
            <div className='aboutPage-title'>
              <h1>O компании Pizza Logo</h1>
              <div style={{border: '1px solid gray'}}></div>
            </div>
            <div className='aboutPage-text'>
            	<p>Делаем пиццу более 12 лет, постоянно следим за еёкачеством и               придумываем новые оригинальные рецепты. В нашем меню 27   видов       пиццы, и мы       несобираемся останавливаться!</p>
                <p>Используем только самые свежие продукты от поставщиков, которым      доверяем. В        нашей пицце и других блюдах нет размороженных    полуфабрикатов.
                </p>
                <p>Готовим восхитительное тесто для основы и не экономим на     ингредиентах и        топингах! Именно поэтому наши пиццытяжелее     и   отличаются очень насыщенным       вкусом!
                </p>
                <p>Предлагаем разнообразное меню: помимо пиццы, у нас всегда можно      заказать         пасту, гриль, суши, салаты, гарниры и десерты,     которые готовят наши         квалифицированные повара.
                </p>
                <p>Принимаем звонки клиентов в нашем профессиональномcall-центре,                операторы которого легко ориентируютсяна местности –   это       значительно упрощает        оформлениезаказов
                </p>
                <p>Доставляем пиццу за 40-50 минут – это действительно самое    быстрое время        доставки пиццы, которая готовится изсвежих      продуктов, а не полуфабрикатов.       Приготовлениевашей пиццы       начинается сразу же после получения заказа.
                </p>
                <p>Заботимся об окружающей среде: вся упаковка сделана из       биоразлагаемых        материалов – картона и бумаги. Кроме того  мы      помогаем с утилизацией        использованных алкалиновых батареек    –   просто отдайте их нашим курьерам.
                </p>
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

export default connect(mapStateToProps)(AboutPage);
