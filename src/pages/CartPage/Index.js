import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import ActionTypes from '../../logic/data/ActionTypes';

import React from 'react';
import { connect } from 'react-redux';

import MasterPage, { 
  mapCommonProps, 
  mapCommonDispatch 
} from '../_base/MasterPage';

import CartCard from '../../components/CartCard';
import PaymentCard from '../../components/PaymentCard';
import List from '../../components/List';
import PageTitle from '../../components/PageTitle';

class CartPage extends MasterPage {

  //#region Render methods

  renderText(){
    return (
      <div className='cartPage-empty'>
        {this.props.localization.cartPage.empty}
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

  renderCart(){
    return (
      <div className='cartPage-body'>
        <List itemModificator='cartPage-card'
              className='cartPage-list col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
          {this.props.cart.map(this.renderCard)}
        </List>
        <PaymentCard 
          orderCostTitle={this.props.localization.cartPage.orderCost}
          totalCostTitle={this.props.localization.cartPage.totalCost}
          discountTitle={this.props.localization.cartPage.discount}
          totalTitle={this.props.localization.cartPage.total}
          checkoutButtonTitle={this.props.localization.cartPage.checkout}
          className='cartPage-payment col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'/>
      </div>
    );
  }

  renderContent = () => {
    const empty = this.props.cart && this.props.cart.length === 0;
    return (
      <div className={`cartPage ${this.props.wrapperClass}`}>
        <PageTitle className='cartPage-title'>
          {this.props.localization.cartPage.title}
        </PageTitle>
        { empty && this.renderText()}
        { !empty && this.renderCart()}
      </div>
    );
  };

  //#endregion Render methods
}

function mapStateToProps(state){
  return mapCommonProps({
    cart: Object.values(state.get('cart'))
  }, state);
}

function mapDispatchToProps(dispatch){
  return mapCommonDispatch({
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
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);