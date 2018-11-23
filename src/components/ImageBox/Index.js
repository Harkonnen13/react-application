import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';
import Spinner from '../Spinner';

class ImageBox extends PureComponent {
  constructor(props){
    super(props);
    this.img = React.createRef();
    this.spinner = React.createRef();
  }

  onImgLoad = () => {
    $(this.spinner.current).addClass('hide');
    $(this.img.current).addClass('show');
  }

  componentDidMount(){
    $(this.img.current).prop('src', this.props.src || '');
  }

  render() {
    return (
      <div className='imageBox'>
        <img ref={this.img} 
             src='' 
             onLoad={this.onImgLoad}                           className='imageBox-img card-img'/>
        <div ref={this.spinner} 
             className='imageBox-loading'>
          <Spinner/>
        </div>
      </div>
    );
  }
}

export default ImageBox;