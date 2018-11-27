import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
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
        <div className='productsPage container'>
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
        <div className='productsPage-text'>
          <div className='container'>
            <p>Готовим восхитительное тесто для основы и не экономим на     ингредиентах и топингах! Именно поэтому наши пиццы тяжелее и   отличаются очень насыщенным вкусом!</p>
          </div>
        </div>
      </div>
    );
  };

  //#endregion Render methods
}

export default ProductsPage;
