import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import $cm from '../../logic/CartManager';

import React from 'react';
import MasterPage from '../_base/MasterPage';
import CartCard from '../../components/CartCard';
import PaymentCard from '../../components/PaymentCard/Index';

class CartPage extends MasterPage {

  constructor(props){
    super(props);
  }

  //#region Render methods

  renderContent = () => {
    let products = Object.values($cm.instance.cart),
        empty = products.length === 0,
        cards = products.map(v =>
            <CartCard key={v.data.id} data={v.data} count={v.count}/>
        );
    return (
      <div className='cartPage'>
        <div className='container'>
          <div className='cartPage-title'>
            <h1>Корзина</h1>
            <div style={{border: '1px solid gray'}}></div>
          </div>
          { 
            empty &&
            <div className={`cartPage-empty ${empty}`}>
            Ваша корзина пуста.</div>
          }

          { 
            !empty &&
            <div className='cartPage-body container'>
              <div className='cartPage-list col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8'>
                  {cards}
              </div>
              <div className='cartPage-payment col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                <PaymentCard></PaymentCard>
              </div>
            </div>
          }
        </div>
      </div>
    );
  };

  //#endregion Render methods
}

export default CartPage;