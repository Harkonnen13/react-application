import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import ListBase from '../_comp-base/ListBase';

class List extends ListBase {

  componentWillReceiveProps(nextProps){
    if(nextProps.justifyContent === true)
      this.justifyContent();
  }

  justifyContent = () => {
    let wrapper = $(this.root.current),
        container;
    requestAnimationFrame(() => {
      if(this.props.children && this.props.children.length > 0){
        container = $(this.container.current);
        wrapper.height(container[0].offsetHeight + 20);
      }
      else{
        container = wrapper.parent();
        wrapper.height(container.height());
      }
    });
  }
}

export default List;