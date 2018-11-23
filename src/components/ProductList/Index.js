import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import $ms from '../../helpers/MediaSelector';

import React, { PureComponent } from 'react';
import ProductCard from '../ProductCard';

class ProductList extends PureComponent {
  constructor(props){
    super(props);
    this.root = React.createRef();
    this.container = React.createRef();
  }

  componentDidUpdate(){
    this.justifyContent();
  }

  componentWillUnmount(){
    $ms.instance.removeListener($ms.events.sizeChanged, this.onSizeChanged);
  }

  componentDidMount(){
    this.justifyContent();
    $ms.instance.on($ms.events.sizeChanged, this.onSizeChanged);
  }

  onSizeChanged = () => {
    this.justifyContent();
  }

  justifyContent = () => {
    let wrapper = $(this.root.current),
        container;
    if(this.props.list && this.props.list.length > 0){
      requestAnimationFrame(() => {
        container = $(this.container.current);
        wrapper.height(container[0].offsetHeight);
      });
    }
    else{
      requestAnimationFrame(() => {
        container = wrapper;
        wrapper.height(container[0].offsetHeight);
      });
    }
  }

  render() {
    const products = this.props.list.map(p => 
      <ProductCard product={p} key={p.id}></ProductCard>
    );
    return (
      <div ref={this.root} className='productList-wrapper'>
        <div ref={this.container}>
          <div className='productList'>
            {products}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;