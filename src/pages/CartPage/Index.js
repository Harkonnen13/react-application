import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import ActionTypes from '../../logic/data/ActionTypes';

import React from 'react';
import { connect } from 'react-redux';

import MasterPage from '../_base/MasterPage';
import CartCard from '../../components/CartCard';
import PaymentCard from '../../components/PaymentCard';
import List from '../../components/List';

class CartPage extends MasterPage {

  //#region Render methods

  renderTitle(){
    return (
      <div className='cartPage-title'>
        <h1>Корзина</h1>
        <div style={{border: '1px solid gray'}}></div>
      </div>
    );
  }

  renderText(){
    return (
      <div className='cartPage-empty'>
          Ваша корзина пуста.
      </div>
    );
  }

  renderCard = (p) =>{
    return (
      <CartCard key={p.data.id} 
                data={p.data} 
                count={p.count} 
                update={this.props.updateCartItem}
                delete={this.props.deleteCartItem}/>
    );
  }

  renderCart(products){
    return (
      <div className='cartPage-body'>
        <List itemModificator='cartPage-card'
              className='cartPage-list col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
          {products.map(this.renderCard)}
        </List>
        <PaymentCard className='cartPage-payment col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'/>
      </div>
    );
  }

  renderContent = () => {
    let products = Object.values(this.props.cart),
        empty = products.length === 0;
    return (
      <div className={`cartPage ${this.props.wrapperClass}`}>
        { this.renderTitle()}
        { empty && this.renderText()}
        { !empty && this.renderCart(products)}
      </div>
    );
  };

  //#endregion Render methods
}

function mapStateToProps(state){
  return {
    scrolled: state.get('scrolled'),
    screen: state.get('screen'),
    wrapperClass: state.get('wrapperClass'),
    cart: state.get('cart')
  };
}

function mapDispatchToProps(dispatch){
  return {
   deleteCartItem: (product) => 
     dispatch({ 
       type: ActionTypes.DELETE_CART_ITEM, 
       payload: product
     }),

   updateCartItem: (product, count) =>
     dispatch({ 
       type: ActionTypes.UPDATE_CART_ITEM,
       payload: {
        item: product,
        count: count
       }
     })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);