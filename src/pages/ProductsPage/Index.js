import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';
import $ from 'jquery';
import { debounce } from 'debounce';

import ActionTypes from '../../logic/data/ActionTypes.js';

import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import MasterPage, { 
  mapCommonProps, 
  mapCommonDispatch 
} from '../_base/MasterPage/Index.js';

import Spinner from '../../components/Spinner/Index.js';
import PageTitle from '../../components/PageTitle/Index.js';

const ProductList = Loadable({
  loader: () => import(/* webpackChunkName: "product-list" */ './ProductList/Index.js'),
  loading() { return <div style={{position: 'relative', flexGrow: 1}}><Spinner/></div> }
});

/**
 * Products page
 */
class ProductsPage extends MasterPage {
  
  componentDidMount(){
    this.fetchProducts(this.props.prodtype);
  }

  componentDidUpdate(prevProps){
    if(this.props.prodtype !== prevProps.prodtype || 
       this.props.lang !== prevProps.lang){
      this.props.clearProducts();
      this.fetchProducts(this.props.prodtype);
    }
  }

  fetchProducts = (type) => {
    const lng = this.props.localization.getLanguage();
    this.props.fetchProducts(`/store?type=${type}`, lng);
  }

  //#region Render methods
  
  renderContent = () => {
    return (
      <div className='productsPage'>
        <div className={`productsPage-main ${this.props.wrapperClass}`}>
          <PageTitle className='productsPage-title'>
            {this.props.localization.productsPage.title[this.props.prodtype]}
          </PageTitle>
          <ProductList {...this.props}/>
        </div>
        <div className='productsPage-info'>
          <div className={`productsPage-text ${this.props.wrapperClass}`}>
            <p>{this.props.localization.productsPage.info[this.props.prodtype]}</p>
          </div>
        </div>
      </div>
    );
  };

  //#endregion Render methods
}

function mapStateToProps(state){
  const ps = state.get('products');
  return mapCommonProps({
    list: ps.get('list'),
    downloaded: ps.get('downloaded')
  }, state);
}

function mapDispatchToProps(dispatch){
  return mapCommonDispatch({
    clearProducts: () => {
      dispatch({ 
        type: ActionTypes.CLEAR_PRODUCTS
      });
    },

    fetchProducts: debounce((href, lng) => {
      $.getJSON(href, { lng: lng }).done(res => {
        dispatch({ 
          type: ActionTypes.RECEIVE_PRODUCTS, 
          payload: res 
        });
      });
    }, 1000),

    addCartItem: product => {
      dispatch({ 
        type: ActionTypes.ADD_CART_ITEM, 
        payload: product 
      })
    },
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);