import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import MasterPage from '../_base/MasterPage';
import CartCard from '../../components/CartCard';
import PaymentCard from '../../components/PaymentCard/Index';

class CartPage extends MasterPage {

  //#region Render methods

  renderContent = () => {
    let products = Object.values(this.props.cart),
        empty = products.length === 0,
        cards = products.map(v =>
            <CartCard key={v.data.id} 
                      data={v.data} 
                      count={v.count} 
                      update={this.props.updateCartItem}
                      delete={this.props.deleteCartItem}/>
        );
    return (
      <div className={`cartPage ${this.props.wrapperClass}`}>
        <div className='cartPage-line cartPage-title'>
          <h1>Корзина</h1>
          <div style={{border: '1px solid gray'}}></div>
        </div>
        { 
          empty &&
          <div className={`cartPage-line cartPage-empty ${empty}`}>
          Ваша корзина пуста.</div>
        }

        { 
          !empty &&
          <div className='cartPage-line cartPage-body'>
            <div className='cartPage-list col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8'>
                {cards}
            </div>
            <div className='cartPage-payment col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
              <PaymentCard></PaymentCard>
            </div>
          </div>
        }
      </div>
    );
  };

  //#endregion Render methods
}

export default CartPage;