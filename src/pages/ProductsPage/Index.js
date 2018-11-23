import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React from 'react';
import MasterPage from '../_base/MasterPage';
import ProductList from '../../components/ProductList';
import Spinner from '../../components/Spinner';

class ProductsPage extends MasterPage {
  constructor(props){
    super(props);
    this.state = {
      list : []
    };
  }

  componentDidMount(){
    $.getJSON(this.props.href)
      .done(res => {
        this.setState({ list: res }); 
          $('.productsPage-loading').addClass('hide');
      });
  }

  //#region Render methods

  renderContent = () => {
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
              list={this.state.list}>
            </ProductList>
            <div className='productsPage-loading'>
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
