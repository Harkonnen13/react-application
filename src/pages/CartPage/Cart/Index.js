import './Styles.less';

import React, { Component } from 'react';
import List from '../../../components/List/Index.js';
import CartCard from '../CartCard/Index.js';
import PaymentCard from '../PaymentCard/Index.js';

/**
 * Cart
 */
class Cart extends Component {
  
  //#region Render methods

  renderCard = (p) =>{
    return (
      <CartCard key={p.data.id} 
                data={p.data} 
                count={p.count} 
                update={this.props.updateCartItem}
                delete={this.props.deleteCartItem}/>
    );
  }

  render(){
    return (
      <div className='cart'>
        <List itemModificator='cart-card'
              className='cart-list col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
          {this.props.cart.map(this.renderCard)}
        </List>
        <div className='cart-payment col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
          <PaymentCard 
            orderCostTitle={this.props.localization.cartPage.orderCost}
            totalCostTitle={this.props.localization.cartPage.totalCost}
            discountTitle={this.props.localization.cartPage.discount}
            totalTitle={this.props.localization.cartPage.total}
            checkoutButtonTitle={this.props.localization.cartPage.checkout}/>
        </div>
      </div>
    );
  };

  //#endregion Render methods
}

export default Cart;