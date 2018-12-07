import 'bootstrap/dist/css/bootstrap.css';
import './Styles.less';

import React, { Component } from 'react';

/**
 * Base page class with base rendering methods
 */
class BasePage extends Component {

  //#region Component override
  
  render() {
    return (
      <div className='basePage'>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }

  //#endregion Component override

  //#region Render methods

  renderHeader = () => {
  };

  renderContent = () => {
  };

  renderFooter = () => {
  };

  //#endregion Render methods
}

export default BasePage;
