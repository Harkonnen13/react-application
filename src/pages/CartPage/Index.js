import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import ActionTypes from '../../logic/data/ActionTypes';

import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import MasterPage, { 
  mapCommonProps, 
  mapCommonDispatch 
} from '../_base/MasterPage';

import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/Spinner';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "cart" */ './Cart'),
  loading() { return <div style={{position: 'relative', flexGrow: 1}}><Spinner/></div> }
});

/**
 * Cart page
 */
class CartPage extends MasterPage {

  //#region Render methods

  renderContent = () => {
    const empty = this.props.cart && this.props.cart.length === 0;
    return (
      <div className={`cartPage ${this.props.wrapperClass}`}>
        <PageTitle className='cartPage-title'>
          {this.props.localization.cartPage.title}
        </PageTitle>
        { empty && 
          <div className='cartPage-empty'>
            {this.props.localization.cartPage.empty}
          </div>
        }
        { !empty && 
          <div className='cartPage-cart'>
            <Cart {...this.props}/>
          </div>
        }
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