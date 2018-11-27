import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';
import ProductCard from '../ProductCard';

class ProductList extends PureComponent {
  constructor(props){
    super(props);
    this.root = React.createRef();
    this.container = React.createRef();
  }

  componentWillReceiveProps(nextProps){
    this.justifyContent();
  }

  justifyContent = () => {
    let wrapper = $(this.root.current),
        container;
    requestAnimationFrame(() => {
      if(this.props.list && this.props.list.length > 0){
        container = $(this.container.current);
        wrapper.height(container[0].offsetHeight);
      }
      else{
        container = wrapper.parent();
        wrapper.height(container.height() - 20);
      }
    });
  }

  render() {
    const products = this.props.list.map(p => 
      <ProductCard product={p} 
                   key={p.id} 
                   addCartItem={this.props.addCartItem}>
      </ProductCard>
    );
    return (
      <div ref={this.root} className='productList-wrapper'>
        <div ref={this.container} className='productList'>
            {products}
        </div>
      </div>
    );
  }
}

export default ProductList;