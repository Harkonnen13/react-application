import React, { Component } from 'react';
import {Container} from 'flux/utils';

import AppStore from '../data/stores/AppStore';
import AboutPage from '../../pages/AboutPage';

class AboutContainer extends Component{

  static getStores() {
    return [
      AppStore,
    ];
  }
   
  static calculateState() {
    let aState = AppStore.getState(),
        state = {
            scrolled: aState.get('scrolled'),
            screen: aState.get('screen'),
            size: aState.get('size')
        };
    return state;
  }

  render() {
    return (
      <AboutPage {...this.state}/>
    );
  }
}
export default Container.create(AboutContainer, { withProps: true });