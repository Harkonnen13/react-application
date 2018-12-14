import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { PureComponent } from 'react';

/**
 * Cart payment card
 */
class PaymentCard extends PureComponent {

  render(){
    return (
      <div className='paymentCard card'>
        <div className='paymentCard'>
          <div className='paymentCard-total'>
	    		  <h4>{this.props.orderCostTitle}</h4>
	    		  <div className='paymentCard-line'>
	    			  <div className='paymentCard-label'>
                {this.props.totalCostTitle}
              </div>
              <div className='paymentCard-val'>
                <span className='paymentCard-price'>{"2800"} &#x20bd;</span>
              </div>
            </div>
            <div className='paymentCard-line'>
              <div className='paymentCard-label'>
                {this.props.discountTitle}
              </div>
              <div className='paymentCard-val'>
                <span className='paymentCard-price'>{"0"} &#x20bd;</span>
              </div>
            </div>
	    	  </div>
          <div className='paymentCard-checkout'>
            <div className='paymentCard-result'>
              <h4>{this.props.totalTitle}</h4>
              <h4>{"2800"} &#x20bd;</h4>
            </div>
            <a className='paymentCard-button btn'>
              {this.props.checkoutButtonTitle}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentCard;