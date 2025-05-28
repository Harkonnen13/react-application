import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';
import $ from 'jquery';

import ListBase from '../_comp-base/ListBase/Index.js';

class List extends ListBase {

  componentDidUpdate(){
    if(this.props.justifyContent){
      let wrapper = $(this.root.current),
          container;
      requestAnimationFrame(() => {
        if(this.props.children && this.props.children.length > 0){
          container = $(this.container.current);
          wrapper.height(container[0].offsetHeight + 20);
        }
      });
    }
  }

  componentDidMount(){
    if(this.props.justifyContent){
      let wrapper = $(this.root.current),
          container;
      requestAnimationFrame(() => {
        container = wrapper.parent();
        wrapper.height(container.height());
      });
    }
  }
}

export default List;