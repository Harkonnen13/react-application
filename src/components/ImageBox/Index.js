import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import $ from 'jquery';
import React, { PureComponent } from 'react';
import Spinner from '../Spinner/Index.js';

/**
 * Box for image with loading animation
 */
class ImageBox extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      downloaded: false
    };
    this.img = React.createRef();
  }

  onImgLoad = () => {
    this.setState({ downloaded: true });
  }

  componentDidMount(){
    this.img.current.src = this.props.src || '';
  }

  render() {
    const ready = this.state.downloaded ? 'imageBox__img_ready ' : '';
    return (
      <div className='imageBox'>
        <img ref={this.img} 
             src='' 
             onLoad={this.onImgLoad}
             className={`imageBox__img ${ready}card-img`}/>
        <Spinner hide={this.state.downloaded}/>
      </div>
    );
  }
}

export default ImageBox;