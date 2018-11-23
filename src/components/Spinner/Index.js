import React, { PureComponent } from 'react';
import './Styles.less';

class Spinner extends PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className='spinner'>
            <div className='spinner-block'></div>
            <div className='spinner-block'></div>
            <div className='spinner-block'></div>
        </div>
    );
  }
}

export default Spinner;