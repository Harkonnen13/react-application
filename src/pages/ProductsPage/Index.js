import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';
import $ from 'jquery';

import ActionTypes from '../../logic/data/ActionTypes';

import React from 'react';
import { connect } from 'react-redux';

import MasterPage, { 
  mapCommonProps, 
  mapCommonDispatch 
} from '../_base/MasterPage';

import List from '../../components/List';
import ProductCard from '../../components/ProductCard';
import Spinner from '../../components/Spinner';
import PageTitle from '../../components/PageTitle';

class ProductsPage extends MasterPage {
  
  componentDidMount(){
    this.fetchProducts(this.props.prodtype);
  }

  componentDidUpdate(prevProps){
    if(this.props.prodtype !== prevProps.prodtype || 
       this.props.lang !== prevProps.lang)
       this.fetchProducts(this.props.prodtype);
  }

  fetchProducts = (type) => {
    const lng = this.props.localization.getLanguage();
    this.props.fetchProducts(`/store?type=${type}`, lng);
  }

  //#region Render methods

  renderProduct = p => {
    return(
      <ProductCard product={p} 
                   key={p.id}
                   addButtonTitle={this.props.localization.buttons.toCart}
                   addCartItem={this.props.addCartItem}/>
    );
  }

  renderContent = () => {
    const downloaded = this.props.downloaded ? 'hide' : '';
    return (
      <div className='productsPage-wrapper'>
        <div className={`productsPage ${this.props.wrapperClass}`}>
          <PageTitle className='productsPage-title'>
            {this.props.localization.productsPage.title[this.props.prodtype]}
          </PageTitle>
          <div className='productsPage-body'>
            <List justifyContent 
                  className='productsPage-list'
                  itemModificator='productsPage-card col-12 col-sm-6 col-md-6 col-lg-4'>
              {this.props.list.map(this.renderProduct)}
            </List>
            <div className={`productsPage-loading ${downloaded}`}>
              <Spinner></Spinner>
            </div>
          </div>
        </div>
        <div className='productsPage-info'>
          <div className={`productsPage-text ${this.props.wrapperClass}`}>
            <p>
              {this.props.localization.productsPage.info[this.props.prodtype]}
            </p>
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
    fetchProducts: (href, lng) => {
      dispatch({ 
        type: ActionTypes.FETCH_PRODUCTS,
        payload: href
      });
  
      $.getJSON(href, { lng: lng }).done(res => {
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
    },
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);