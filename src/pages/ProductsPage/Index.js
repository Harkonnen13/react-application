import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import ActionTypes from '../../logic/data/ActionTypes';

import React from 'react';
import { connect } from 'react-redux';

import MasterPage from '../_base/MasterPage';
import ProductList from '../../components/ProductList';
import Spinner from '../../components/Spinner';

class ProductsPage extends MasterPage {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts(this.props.href);
  }

  //#region Render methods

  renderContent = () => {
    let loaded = this.props.loaded ? 'hide' : '';
    return (
      <div className='productsPage-wrapper'>
        <div className={`productsPage ${this.props.wrapperClass}`}>
          <div className='productsPage-title'>
            <h1>{this.props.title || 'Title'}</h1>
            <div style={{border: '1px solid gray'}}></div>
          </div>
          <div className='productsPage-list'>
            <ProductList 
              title={this.props.title}
              list={this.props.list || []}
              addCartItem={this.props.addCartItem}>
            </ProductList>
            <div className={`productsPage-loading ${loaded}`}>
              <Spinner></Spinner>
            </div>
          </div>
        </div>
        <div className='productsPage-info'>
          <div className={`productsPage-text ${this.props.wrapperClass}`}>
            <p>Готовим восхитительное тесто для основы и не экономим на     ингредиентах и топингах! Именно поэтому наши пиццы тяжелее и   отличаются очень насыщенным вкусом!</p>
          </div>
        </div>
      </div>
    );
  };

  //#endregion Render methods
}

function mapStateToProps(state){
  const ps = state.get('products');
  return {
    scrolled: state.get('scrolled'),
    screen: state.get('screen'),
    wrapperClass: state.get('wrapperClass'),

    list: ps.list,
    loaded: ps.loaded
  };
}

function mapDispatchToProps(dispatch){
  return { 
    fetchProducts: href => {
      dispatch({ 
        type: ActionTypes.FETCH_PRODUCTS 
      });
  
      $.getJSON(href).done(res => {
          dispatch({ 
              type: ActionTypes.RECEIVE_PRODUCTS, 
              payload: res 
          });
      });
    },

    addCartItem: product => {
      dispatch({ 
        type: ActionTypes.ADD_CART_ITEM, 
        payload: product 
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);